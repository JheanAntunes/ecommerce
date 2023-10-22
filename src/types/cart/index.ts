import { CartEntry } from 'use-shopping-cart/core'

export type Type_Product_Cart = {
    id: string
    currency: string
    name: string
    price: number
    description: string
    image: string
    sku: string
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
} & CartEntry
