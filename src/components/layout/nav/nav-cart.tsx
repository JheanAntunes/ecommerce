import { LucideShoppingCart } from 'lucide-react'
import Link from 'next/link'
import NavCartQtd from './nav-cart-qtd'

function NavCart() {
    return (
        <>
            <Link href="/cart" className="relative">
                {' '}
                <LucideShoppingCart className="text-slate-800" />
                <NavCartQtd />
            </Link>
        </>
    )
}

export default NavCart
