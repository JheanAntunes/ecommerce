'use client'
import { Type_Product_Cart } from '@/types/cart'
import { ShoppingCart } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'
import {} from 'use-shopping-cart/core'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

type Type_Section_Card_Product_Add_Cart_Props = {
    product: Type_Product_Cart
}

function Section_Card_Product_Add_Cart({
    product,
}: Type_Section_Card_Product_Add_Cart_Props) {
    const { toast } = useToast()
    const { addItem } = useShoppingCart()
    const handleClick_Add_product_Cart = () => {
        //message
        toast({
            title: product.name,
            description: `Você adicinou no carrinho o produto ${product.name}`,
        })
        //add-product-cart
        addItem({ ...product })
    }

    return (
        <Button
            className={`items-center gap-2 text-slate-800`}
            variant="outline"
            onClick={handleClick_Add_product_Cart}
        >
            adicionar <ShoppingCart height={20} width={20} />{' '}
        </Button>
    )
}

export default Section_Card_Product_Add_Cart
