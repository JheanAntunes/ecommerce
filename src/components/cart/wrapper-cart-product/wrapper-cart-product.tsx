'use client'
import { formated_CartDetails_Object_value } from '@/utils/formated_CartDetails_Object_value'
import { PropsWithChildren } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Cart_Product_Card from '../cart_product_card'

function WrapperCartProduct({ children }: PropsWithChildren) {
    const { cartDetails } = useShoppingCart()

    const array_Cart_Product = formated_CartDetails_Object_value(cartDetails)

    if (array_Cart_Product.length === 0) return <>{children}</>

    return (
        <div className="flex flex-col gap-5">
            {array_Cart_Product.map((productCart) => (
                <Cart_Product_Card
                    key={productCart.description}
                    {...productCart}
                />
            ))}
        </div>
    )
}

export default WrapperCartProduct
