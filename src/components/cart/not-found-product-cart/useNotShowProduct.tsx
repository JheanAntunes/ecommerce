import { formated_CartDetails_Object_value } from '@/utils/formated_CartDetails_Object_value'
import { useShoppingCart } from 'use-shopping-cart'

function useNotShowProduct(): boolean {
    const { cartDetails } = useShoppingCart()
    //Não mostre quando o carrinho estiver vazio.
    const productCart = formated_CartDetails_Object_value(cartDetails)
    if (!productCart.length) return true
    return false
}

export default useNotShowProduct
