import { Type_variavel_url } from '@/app/product/[productId]/page'
import Image from 'next/image'
import Product_Image_Circle from './product_image_circle'

type Type_Product_Images_Props = {
    image_thumbnail: string
    image_alt: string
    images: string[]
    id_product: number
    variavel_url_image_index: Type_variavel_url
}

function Product_Images({
    image_thumbnail,
    image_alt,
    images,
    id_product,
    variavel_url_image_index,
}: Type_Product_Images_Props) {
    return (
        <div className="mt-5 flex gap-5">
            <div className="flex flex-col justify-between gap-5">
                {images.map((image_url, index) => (
                    <Product_Image_Circle
                        key={image_url}
                        image_url={image_url}
                        image_index={index}
                        id_product={id_product}
                        image_alt={image_alt}
                    />
                ))}
            </div>
            <div className="relative h-full w-full overflow-hidden">
                <Image
                    src={
                        variavel_url_image_index
                            ? images[Number(variavel_url_image_index)]
                            : image_thumbnail
                    }
                    alt={image_alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="animate-fade object-contain"
                />
            </div>
        </div>
    )
}

export default Product_Images
