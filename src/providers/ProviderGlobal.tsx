'use client'

import { PropsWithChildren } from 'react'
import ProviderMenuHamburguer from './ProviderMenuHambur/ProviderMenuHamburguer'
import ProviderProductLike from './ProviderProductLike/ProviderProductLike'

function ProviderGlobal({ children }: PropsWithChildren) {
    return (
        <ProviderMenuHamburguer>
            <ProviderProductLike>{children}</ProviderProductLike>
        </ProviderMenuHamburguer>
    )
}

export default ProviderGlobal
