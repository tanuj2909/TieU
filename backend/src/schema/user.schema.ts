import {z} from 'zod';

const signupSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6).max(14)
})


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1)
})

const logoutSchema = z.string().min(1)

export {
    signupSchema,
    loginSchema,
    logoutSchema
}