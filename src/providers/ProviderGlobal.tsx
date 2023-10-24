'use client'

import { PropsWithChildren } from 'react'
import { CartProvider } from 'use-shopping-cart'
import ProviderMenuHamburguer from './ProviderMenuHambur/ProviderMenuHamburguer'
import ProviderProductLike from './ProviderProductLike/ProviderProductLike'

function ProviderGlobal({ children }: PropsWithChildren) {
    return (
        <CartProvider
            shouldPersist
            cartMode="checkout-session"
            currency="BRL"
            stripe=""
        >
            <ProviderMenuHamburguer>
                <ProviderProductLike>{children}</ProviderProductLike>
            </ProviderMenuHamburguer>
        </CartProvider>
    )
}

export default ProviderGlobal
