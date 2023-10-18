import * as z from 'zod'
export const Object_Zod_Product = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    discountPercentage: z.number(),
    rating: z.number(),
    stock: z.number(),
    brand: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    images: z.string().array(),
})

export const schema_Api_Data = z.object({
    products: Object_Zod_Product.array(),
    total: z.number(),
    skip: z.number(),
    limit: z.number(),
})

export const schema_Api_Dynamic_Product = Object_Zod_Product

export type Type_Api_DATA = z.infer<typeof schema_Api_Data>
export type Type_Api_Product = z.infer<typeof Object_Zod_Product>
