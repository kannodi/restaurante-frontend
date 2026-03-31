import { Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { AuthRequest, esRestaurantePayload } from '../types/restaurante.types'
import {config} from "../config"

export const verifyToken = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
):void => {
    const authHeader = req.headers.authorization
    if(!authHeader) {
        res.status(401).json({ error: 'Autorización requerida' })
        return;
    }
    const token = authHeader.split(' ')[1] // Bearer <token>
    try {
        const decoded =verify(token, config.jwtSecret)
        if (!esRestaurantePayload(decoded)) {
            res.status(401).json({ error: 'Payload del Token inválido' })
            return;
        }
            req.usuario = decoded
            next()
        } catch (error: unknown) {
            const mensaje = error instanceof Error ? error.message : 'Token inválido o expirado'
            res.status(401).json({ error: mensaje })
        }
}   