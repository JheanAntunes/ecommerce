'use client'
import { cn } from '@/lib/utils'
import { Heart } from 'lucide-react'
import { Button } from '../ui/button'
import useLogicLikeProduct from './useLogicLikeProduct'

type Type_Section_card_product_like_Props = {
    index: number
    id_product: number
}

function Section_card_product_like({
    id_product,
}: Type_Section_card_product_like_Props) {
    const { verificated_IdProduct, likeProduct } =
        useLogicLikeProduct(id_product)

    return (
        <Button
            size="icon"
            className="rounded-full bg-slate-50 hover:bg-slate-50"
            onClick={() => {
                verificated_IdProduct()
            }}
        >
            <Heart
                className={cn(
                    'text-red-500 @5xl:hover:fill-red-500',
                    likeProduct ? 'fill-red-500 @5xl:hover:fill-red-600' : false
                )}
            />
        </Button>
    )
}

export default Section_card_product_like
