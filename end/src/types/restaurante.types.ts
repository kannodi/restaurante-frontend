// ─────────────────────────────────────────────────────────
// ENUMS — Valores fijos del restaurante
// Un enum garantiza que solo los valores definidos aquí
// pueden usarse como categoría.
// ─────────────────────────────────────────────────────────

export enum Categoria {
  ENTRADA   = 'Entradas',
  PRINCIPAL = 'Segundos',
  POSTRE    = 'Postres',
  BEBIDA    = 'Bebidas'
}

// ─────────────────────────────────────────────────────────
// INTERFACES — Modelos del restaurante
// ─────────────────────────────────────────────────────────

import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { unknown } from 'zod';

// El estado de un plato se determina según su stock:
export type EstadoPlato = "disponible" | "agotado"| "suspedido" 

export type ResultadoOperacion <T> =
  | { success: true; data: T }
  | { success: false; error: string }

export interface Plato {
  _id:        string   // generado por MongoDB
  nombre:    string
  categoria?: Categoria
  precio:    number
  stock:     number
  disponible: boolean  // calculado según el stock
}
// 📥 Lo que envía el cliente al crear un plato (POST /menu)
export interface CreatePlatoDto {
  nombre:    string
  categoria?: Categoria
  precio:    number
  stock:     number
  // Sin _id ni disponible — los genera el servidor
}
// 📤 Lo que devuelve el servidor al cliente (GET /menu)
export interface PlatoResponseDto extends Plato {
}
export interface UpdatePlatoDto {
  nombre?:    string
  categoria?: Categoria
  precio?:    number
  stock?:     number
}

export interface User {
  _id:      string
  email:    string
  password: string  // siempre hasheado, NUNCA texto plano
}
 
export interface RegisterDto {
  email:    string
  password: string
}
 
export interface LoginDto {
  email:    string
  password: string
}
 
export interface LoginResponseDto {
  token:   string
  message: string
}


export interface RestaurantePayload { 
  email: string
  iat? : number
  exp? : number
}

export function esRestaurantePayload(
  valor: unknown
): valor is RestaurantePayload {
  return (
  typeof valor === 'object' && 
  valor !== null && 
  'email' in valor && 
  typeof (valor as RestaurantePayload).email === 'string')
}

export interface AuthRequest extends Request {
  usuario?: RestaurantePayload
}