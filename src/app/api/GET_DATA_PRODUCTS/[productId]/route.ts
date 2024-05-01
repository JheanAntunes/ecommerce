import {
    schema_Api_Dynamic_Product,
    Type_Api_Product,
} from '@/schema/api/schema_Api_data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params: { productId } }: { params: { productId: string } }
) {
    //Pegar o parametro de url enviado.
    try {
        const response = await fetch(
            `https://dummyjson.com/products/${productId}`
        )
        if (!response.ok) throw new Error('ERROR:GET_PRODUCTS')
        const data: Type_Api_Product = await response.json()
        const validatedData = schema_Api_Dynamic_Product.safeParse(data)
        if (!validatedData.success)
            throw new Error('ERROR: ', validatedData.error)
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        console.log(error)
    }
}
