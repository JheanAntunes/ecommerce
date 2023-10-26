import { Type_Api_Product } from '@/schema/api/schema_Api_data'
import { Type_Product_Cart } from '@/types/cart'
import { ShoppingBasketIcon } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { TypographyH3, TypographySmall } from '../Typography/typography'
import { Button } from '../ui/button'
import Section_Card_Product_Add_Cart from './section_card_product_add_cart'
import Section_card_product_like from './section_card_product_like'

const poppins = Poppins({
    weight: ['400', '500'],
    subsets: ['latin'],
    fallback: ['sans-serif', 'serif'],
})
type Type_Section_Card_Produto_Props = {
    data_products: Type_Api_Product[]
}

function Section_Card_Produto({
    data_products,
}: Type_Section_Card_Produto_Props) {
    return (
        <div className="grid grid-cols-4 gap-5 @xs:grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 @4xl:grid-cols-4">
            {data_products.map(
                (
                    {
                        description,
                        title,
                        price,
                        id,
                        thumbnail,
                        brand,
                        category,
                        discountPercentage,
                        stock,
                        rating,
                    },
                    index
                ) => (
                    <div
                        key={description + title}
                        className="rounded bg-slate-50 p-5 shadow"
                    >
                        <div className="relative w-full">
                            <div className="relative h-32 w-full overflow-hidden">
                                {/* Image */}
                                <Image
                                    src={thumbnail}
                                    alt={description}
                                    className="object-contain"
                                    fill
                                    sizes="100vw"
                                />
                            </div>
                            <div className="absolute right-0 top-0 -translate-y-2 @sm:translate-x-3 @xl:translate-x-2 @6xl:-translate-x-1 @6xl:-translate-y-2">
                                {/* Heart - Gostei Produto */}
                                <Section_card_product_like
                                    id_product={id}
                                    titleProduct={title}
                                    image_thumbnail={thumbnail}
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <TypographyH3
                                className={`${poppins.className} text-xl font-normal text-slate-800`}
                            >
                                {title}
                            </TypographyH3>
                            <p className="flex items-center gap-1 text-slate-600">
                                <span className="sr-only">Preço</span>
                                <TypographySmall>R$</TypographySmall>
                                <span className={`text-slate-800`}>
                                    {price}
                                </span>
                            </p>
                        </div>
                        <div className="mt-5 flex flex-col gap-5">
                            <Button
                                className={`font-poppins items-center gap-2 bg-blue-500 font-medium hover:bg-blue-600`}
                                asChild
                            >
                                <Link href={`/product/${id}`}>
                                    Comprar{' '}
                                    <ShoppingBasketIcon
                                        height={20}
                                        width={20}
                                    />{' '}
                                </Link>
                            </Button>
                            <Section_Card_Product_Add_Cart
                                product={
                                    {
                                        id: id.toString(),
                                        currency: 'BRL',
                                        name: title,
                                        price: Number(price),
                                        description,
                                        image: thumbnail,
                                        sku: id.toString(),
                                        brand,
                                        category,
                                        discountPercentage,
                                        rating,
                                        stock,
                                    } as Type_Product_Cart
                                }
                            />
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Section_Card_Produto
