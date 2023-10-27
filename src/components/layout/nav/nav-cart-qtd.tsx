'use client'
import { TypographySmall } from '@/components/Typography/typography'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function NavCartQtd({ className, ...props }: ComponentProps<"div">) {
    const { cartCount } = useShoppingCart()

    return (
        <div className={cn("absolute right-0 top-0 flex h-5 w-5 -translate-y-2 translate-x-2 items-center justify-center rounded-full bg-red-500 @5xl:hover:bg-red-600", {}, className)}>
            <TypographySmall className="text-slate-50" {...props}>
                {cartCount}
            </TypographySmall>
        </div>
    )
}

export default NavCartQtd
