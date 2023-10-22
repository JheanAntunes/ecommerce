import { Type_Product_Cart } from '@/types/cart'

export const formated_CartDetails_Object_value = (
    cartDetails: any
): Type_Product_Cart[] => {
    return Object.values(cartDetails)
}
