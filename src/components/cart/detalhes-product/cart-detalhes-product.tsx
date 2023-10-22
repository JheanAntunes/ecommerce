import RatingStar from '@/components/ratingStart/ratingStar'
import {
    TypographyDecoradorH2,
    TypographySmall,
} from '@/components/Typography/typography'

type Type_CartDetalhesProduct_Props = {
    name: string
    price: string | number
    brand: string
    category: string
    rating: number
}

function CartDetalhesProduct({
    name,
    brand,
    category,
    price,
    rating,
}: Type_CartDetalhesProduct_Props) {
    return (
        <div className="flex flex-col gap-3">
            <TypographyDecoradorH2 className="text-lg before:h-4 @5xl:text-2xl @5xl:before:h-6">
                {name}
            </TypographyDecoradorH2>
            <TypographySmall>{price}</TypographySmall>
            <TypographySmall className="flex gap-2">
                <RatingStar rating={rating} />{' '}
            </TypographySmall>
            <TypographySmall>{category}</TypographySmall>
            <TypographySmall>{brand}</TypographySmall>
        </div>
    )
}

export default CartDetalhesProduct
