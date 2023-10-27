'use client'
import { TypographySmall } from '@/components/Typography/typography'
import { formated_CartDetails_Object_value } from '@/utils/formated_CartDetails_Object_value'
import { useShoppingCart } from 'use-shopping-cart'

function CartAsideDetalhes() {
    const { totalPrice, cartCount, cartDetails } = useShoppingCart()

    const full_Discount = formated_CartDetails_Object_value(cartDetails).reduce(
        (acc, cur) => acc + cur.discountPercentage * cur.quantity,
        0
    )

    return (
        <ul className="flex flex-col gap-5">
            <li>
                <TypographySmall className="flex gap-2">
                    Valor total:{' '}
                    <span className="text-slate-800">
                        {totalPrice &&
                            totalPrice.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        {!totalPrice && <span>R$: 0</span>}
                    </span>
                </TypographySmall>
            </li>
            <li>
                <TypographySmall className="flex gap-2">
                    Quantidade de produtos:{' '}
                    <span className="text-slate-800">
                        {cartCount ? cartCount : 0}
                    </span>{' '}
                </TypographySmall>
            </li>
            <li>
                <TypographySmall className="flex gap-2">
                    Desconto total:{' '}
                    <span className="text-slate-800">
                        {full_Discount &&
                            full_Discount.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                    </span>
                </TypographySmall>
            </li>
        </ul>
    )
}

export default CartAsideDetalhes
