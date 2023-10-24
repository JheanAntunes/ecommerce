'use client'
import { TypographySmall } from '@/components/Typography/typography'
import { useShoppingCart } from 'use-shopping-cart'

function NavCartQtd() {
    const { cartCount } = useShoppingCart()

    return (
        <div className="absolute right-0 top-0 flex h-5 w-5 -translate-y-2 translate-x-2 items-center justify-center rounded-full bg-red-500 @5xl:hover:bg-red-600">
            <TypographySmall className="text-slate-50">
                {cartCount}
            </TypographySmall>
        </div>
    )
}

export default NavCartQtd
