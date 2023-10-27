import Product_Detalhes from '@/components/product-dinamico/product-detalhes/product_detalhes'
import Product_Qtd_Forma_Pagamento from '@/components/product-dinamico/product-forma-pagamento/product_forma_pagamento'
import Product_Images from '@/components/product-dinamico/product-images/product_images'
import Localidade_Pathname from '@/components/product-dinamico/product-localidade-pathname/localidade_pathname'
import { TypographySmall } from '@/components/Typography/typography'
import { Type_Api_Product } from '@/schema/api/schema_Api_data'
import { ChevronRight } from 'lucide-react'
import { Metadata } from 'next'

export type Type_variavel_url = string | string[] | undefined

type Type_PageProductDynamic_Props = {
    params: { productId: string }
    searchParams: { [key: string]: Type_variavel_url }
}

type Type_PageParams = Omit<Type_PageProductDynamic_Props, 'searchParams'>

// Dynamic metadata
export async function generateMetadata({
    params,
}: Type_PageParams): Promise<Metadata> {
    const response = await fetch(
        `${process.env.domain}/api/GET_DATA_PRODUCTS/${params.productId}`
    )
    if (!response.ok) throw new Error('Error:PageProductDynamic')

    const product: Type_Api_Product = await response.json()

    return {
        title: product.title,
        description: product.description,
    }
}

async function PageProductDynamic({
    params: { productId },
    searchParams,
}: Type_PageProductDynamic_Props) {
    const response = await fetch(
        `${process.env.domain}/api/GET_DATA_PRODUCTS/${productId}`
    )
    if (!response.ok) throw new Error('Error:PageProductDynamic')

    const product: Type_Api_Product = await response.json()
    let variavel_url_image_index: undefined | string | string[] =
        searchParams.image_index
    return (
        <section className="col-start-2 col-end-2 mt-5">
            <Localidade_Pathname titleProduct={product.title}>
                <ChevronRight width={20} height={20} />
                <TypographySmall>Produtos</TypographySmall>
            </Localidade_Pathname>
            <div className="grid grid-cols-1 gap-5 @2xl:grid-cols-[380px_1fr] @3xl:grid-cols-[380px_1fr] @4xl:grid-cols-[440px_1fr] @5xl:grid-cols-[480px_2fr_1fr]">
                <Product_Images
                    image_thumbnail={product.thumbnail}
                    images={product.images}
                    image_alt={product.description}
                    id_product={product.id}
                    variavel_url_image_index={variavel_url_image_index}
                />
                <Product_Detalhes {...product} />
                <Product_Qtd_Forma_Pagamento />
            </div>
        </section>
    )
}

export default PageProductDynamic
