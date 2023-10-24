import RatingStar from '@/components/ratingStart/ratingStar'
import {
    TypographyDecoradorH1,
    TypographyP,
    TypographySmall,
} from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { Type_Api_Product } from '@/schema/api/schema_Api_data'
import { ShoppingCart, Truck } from 'lucide-react'
import Product_Detalhes_Like from './product-detalhes-like/product_detalhes_like'

function Product_Detalhes({
    title,
    price,
    discountPercentage,
    brand,
    stock,
    rating,
    description,
    id,
    thumbnail,
}: Type_Api_Product) {
    return (
        <div className="mt-5 flex flex-col gap-5">
            <div className="flex justify-between">
                <TypographyDecoradorH1>{title}</TypographyDecoradorH1>
                <Product_Detalhes_Like
                    id_product={id}
                    titleProduct={title}
                    image_thumbnail={thumbnail}
                />
            </div>
            <div className="flex items-center gap-5">
                <TypographySmall>
                    <s>{price - discountPercentage}</s>
                </TypographySmall>
                <TypographySmall className="text-xl">R${price}</TypographySmall>
            </div>
            <div className="flex items-center gap-5">
                <TypographySmall>{brand}</TypographySmall>
                <TypographySmall>{stock}</TypographySmall>
                <TypographySmall className="flex gap-2">
                    <RatingStar rating={rating} />
                </TypographySmall>
            </div>
            <TypographyP className=" text-slate-700">{description}</TypographyP>
            <Button className="items-center gap-2 bg-blue-500 text-slate-50 hover:bg-blue-600">
                Comprar
                <Truck className="text-slate-50" height={20} width={20} />
            </Button>
            <Button
                className="items-center gap-2 bg-transparent text-slate-700 hover:bg-transparent"
                variant="outline"
            >
                Adicionar
                <ShoppingCart
                    className="text-slate-700"
                    height={20}
                    width={20}
                />
            </Button>
        </div>
    )
}

export default Product_Detalhes
