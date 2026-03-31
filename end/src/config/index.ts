import {z} from 'zod'

const envSchema = z.object({
    PORT: z.string().default('3000'),
    MONGODB_URI: z.string().min(1, {message:'MONGODB_URI es requerido -  agreguen mongdb://... a su .env'}),
    JWT_SECRET: z.string().min(8, {message:'JWT_SECRET debe tener al menos 8 caracteres'}),
})
//Validar y parsear las variables de entorno con Zod
const env = envSchema.parse(process.env)

export const config = {
    port: Number(env.PORT),
    mongodbUri: env.MONGODB_URI,
    jwtSecret: env.JWT_SECRET,
} as const