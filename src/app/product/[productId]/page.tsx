import Product_Detalhes from '@/components/product-dinamico/product-detalhes/product_detalhes'
import Product_Images from '@/components/product-dinamico/product-images/product_images'
import Localidade_Pathname from '@/components/product-dinamico/product-localidade-pathname/localidade_pathname'
import Product_Qtd_Forma_Pagamento from '@/components/product-dinamico/product-qtd-forma-pagamento/product_qtd_forma_pagamento'
import { Type_Api_Product } from '@/schema/api/schema_Api_data'
import { Metadata, ResolvingMetadata } from 'next'

export type Type_variavel_url = string | string[] | undefined

type Type_PageProductDynamic_Props = {
    params: { productId: string }
    searchParams: { [key: string]: Type_variavel_url }
}

export async function generateMetadata(
    { params, searchParams }: Type_PageProductDynamic_Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.productId

    // fetch data
    const product: Type_Api_Product = await fetch(
        `http://localhost:3000/api/GET_DATA_PRODUCTS/${id}`
    )
        .then((res) => res.json())
        .catch((e) => {
            console.log('generateMetadata ' + e)
        })

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

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
        `http://localhost:3000/api/GET_DATA_PRODUCTS/${productId}`
    )
    if (!response.ok) throw new Error('Error:PageProductDynamic')

    const product: Type_Api_Product = await response.json()
    let variavel_url_image_index: undefined | string | string[] =
        searchParams.image_index

    return (
        <section className="col-start-2 col-end-2 mt-5">
            <Localidade_Pathname titleProduct={product.title} />
            <div className="grid grid-cols-1 gap-5 @2xl:grid-cols-[380px_1fr] @3xl:grid-cols-[380px_1fr] @4xl:grid-cols-[440px_1fr] @5xl:grid-cols-[480px_2fr_1fr]">
                <Product_Images
                    image_thumbnail={product.thumbnail}
                    images={product.images}
                    image_alt={product.description}
                    id_product={product.id}
                    variavel_url_image_index={variavel_url_image_index}
                />
                <Product_Detalhes {...product} />
                <Product_Qtd_Forma_Pagamento price={product.price} />
            </div>
        </section>
    )
}

export default PageProductDynamic
