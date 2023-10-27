import { cn } from '@/lib/utils'
import { LucideShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { ComponentProps } from 'react'
import NavCartQtd from './nav-cart-qtd'

function NavCart({ children, className }: ComponentProps<"a">) {
    return (
        <>
            <Link href="/cart" className={cn("relative", {}, className)}>
                {children}
                <LucideShoppingCart className="text-slate-800" />
                <NavCartQtd />
            </Link>
        </>
    )
}

export default NavCart
