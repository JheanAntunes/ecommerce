import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { Type_Data_Image_Description } from '../slider/Type_data_Image_Description'
import { TypographyH3, TypographySmall } from '../Typography/typography'
import Section_card_product_like from './section_card_product_like'

const poppins = Poppins({
    weight: ['400', '500'],
    subsets: ['latin'],
    fallback: ['sans-serif', 'serif'],
})
type Type_Section_Card_Produto_Props = {
    data_Image_Description_Title: Type_Data_Image_Description[]
}

function Section_Card_Produto({
    data_Image_Description_Title,
}: Type_Section_Card_Produto_Props) {
    return (
        <div className="grid grid-cols-4 gap-5 @xs:grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 @4xl:grid-cols-4">
            {data_Image_Description_Title.map(
                ({ description, image_thumbnail, title, price, id }, index) => (
                    <div
                        key={description + title}
                        className="rounded bg-slate-50 p-5 shadow"
                    >
                        <div className="relative w-full">
                            <div className="relative h-32 w-full overflow-hidden">
                                {/* Image */}
                                <Image
                                    src={image_thumbnail}
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
                                    image_thumbnail={image_thumbnail}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
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
                    </div>
                )
            )}
        </div>
    )
}

export default Section_Card_Produto
