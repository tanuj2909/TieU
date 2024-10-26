import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "../utils/db";
import { generateAccessToken } from "../utils/user.js";
import { User } from "@prisma/client";


export const verifyJWT = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
    
        const token: string | undefined = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        let decodedToken: JwtPayload | string | null = null;

        try {
            decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "s3cr3t" as string) as JwtPayload;
        } catch (err) {

            const userRefreshToken: string | undefined = req.cookies?.refreshToken;

            if (!userRefreshToken) {
                throw new ApiError(401, "Invalid access token, refresh token missing");
            }

            const decodedRefreshToken: JwtPayload | string = jwt.verify(userRefreshToken, process.env.REFRESH_TOKEN_SECRET || "sUp3rS3cR3T" as string) as JwtPayload;

            if (!decodedRefreshToken) {
                throw new ApiError(401, "Invalid refresh token");
            }

            const id = decodedRefreshToken.id as string;

            const user = await db.user.findUnique({
                where: {
                    id
                }
            })

            if (!user || userRefreshToken !== user.refreshToken) {
                throw new ApiError(401, "Invalid refresh token");
            }

            const newAccessToken = generateAccessToken(user)

            const options = {
                httpOnly: true,
                secure: true
            }

            res.cookie("accessToken", newAccessToken, options);
            req.headers["id"] = user.id
            next();
            return;
        }

        const id = decodedToken.id as string;

        const user = await db.user.findUnique({
            where: {
                id
            }
        })

        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        req.headers["id"] = user.id
        next();
    } catch(error) {
        if(error instanceof ApiError) throw error
        throw new ApiError(401, "Invalid token");
    }
});
