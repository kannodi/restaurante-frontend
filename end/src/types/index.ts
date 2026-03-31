import { Categoria } from './restaurante.types'
 
// Usando el enum correctamente
const categoriaDeHoy: Categoria = Categoria.PRINCIPAL
console.log(categoriaDeHoy)  // imprime: 'Segundos'
 
// Ver todos los valores disponibles
const todasLasCategorias = Object.values(Categoria)
console.log(todasLasCategorias)
// ['Entradas', 'Segundos', 'Postres', 'Bebidas']
 
// Descomenten para ver el error en acción:
// const categoriaInvalida: Categoria = 'seg'
// TypeScript marca error: 'seg' no es un valor del enum
