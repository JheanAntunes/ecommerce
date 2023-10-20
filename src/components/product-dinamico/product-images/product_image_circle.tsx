import Image from 'next/image'
import Link from 'next/link'

type Type_Product_Image_Circle_Props = {
    image_url: string
    image_index: number
    id_product: number
    image_alt: string
}

function Product_Image_Circle({
    image_index,
    id_product,
    image_url,
    image_alt,
}: Type_Product_Image_Circle_Props) {
    return (
        <Link
            scroll={false}
            replace
            href={{
                pathname: `/product/${id_product}`,
                query: { image_index: image_index },
            }}
        >
            <div className="relative h-6 w-6 overflow-hidden rounded-full @3xl:h-8 @3xl:w-8 @5xl:h-12 @5xl:w-12">
                <Image
                    src={image_url}
                    fill
                    alt={image_alt}
                    sizes="60px"
                    className="object-cover"
                />
            </div>
        </Link>
    )
}

export default Product_Image_Circle
