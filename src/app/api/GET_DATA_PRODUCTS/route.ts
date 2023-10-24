import { schema_Api_Data, Type_Api_DATA } from '@/schema/api/schema_Api_data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=8')
        if (!response.ok) throw new Error('ERROR:GET_PRODUCTS')
        const data: Type_Api_DATA = await response.json()
        const validatedData = schema_Api_Data.safeParse(data)
        console.log(data.products[0].price)
        if (!validatedData.success)
            throw new Error('ERROR: ', validatedData.error)
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
    }
}
