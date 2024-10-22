import { User } from "@prisma/client"
import jwt from "jsonwebtoken"
import { ApiError } from "./ApiError"
import { db } from "./db"


export const generateAccessAndRefereshTokens = async(userId: string) =>{
    try {
        const user = await db.user.findUnique({
            where: {
                id: userId
            }
        })
        if(!user) throw new ApiError(404, "User not found")
        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)
    
        await db.user.update({
            where: {
                id: userId
            },
            data: {
                refreshToken
            }
        })
    
        return {accessToken, refreshToken}
    } catch {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
    
}


export const generateAccessToken = (user: User) => {
    return jwt.sign({
            id: user.id,
            email: user.email,
        },
        process.env.ACCESS_TOKEN_SECRET || "s3cr3t",
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "24h"
        }
    )
}

export const generateRefreshToken = (user: User) => {
    return jwt.sign({
            id: user.id,
        },
        process.env.REFRESH_TOKEN_SECRET || "sUp3rS3cR3T",
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "30d"
        }
    )
}