import { db } from "../utils/db";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { generateAccessAndRefereshTokens, generateAccessToken, generateRefreshToken } from "../utils/user";
import { asyncHandler } from "../utils/asyncHandler";
import { loginSchema, logoutSchema, signupSchema } from "../schema/user.schema";
import bcrypt from 'bcrypt'



const registerUser = asyncHandler(async (req, res) => {

    const input = req.body

    const result = signupSchema.safeParse(input)
    
    if(!result.success) {
        throw new ApiError(400, "All fields are required")
    }

    const {name, email, password} = result.data

    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    })

    if (existingUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

    
    const user = await db.user.create({
        data: {
            name: name,
            password: await bcrypt.hash(password, 10),
            email: email
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })


    if (!user) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    
    
    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user.id)
    const options = {
        httpOnly: true,
        secure: true
    }

    await db.user.update({
        where: {
            id: user.id,
        }, 
        data: {
            refreshToken
        }
    })

    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {user, accessToken, refreshToken}, "User registered Successfully")
        )

})


const loginUser = asyncHandler(async (req, res) =>{


    const input = req.body

    const result = loginSchema.safeParse(input)
    
    if(!result.success) {
        throw new ApiError(400, "Invalid input")
    }
    
    const { email, password } = result.data


    const user = await db.user.findUnique({
        where: {
            email
        }
    })


    if (!user) {
        throw new ApiError(404, "User does not exist")
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user.id)


    const loggedInUser = await db.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, "User logged In Successfully")
        )

})

const logoutUser = asyncHandler(async (req, res) => {

    const input = req.headers["id"]

    const result = logoutSchema.safeParse(input)

    if(!result.success) {
        throw new ApiError(400, "Invalid Input")
    }
    const id = result.data

    await db.user.update({
        where: {
            id
        },
        data: {
            refreshToken: null
        }
    })

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged Out"))
})

export {
    registerUser,
    loginUser,
    logoutUser
}