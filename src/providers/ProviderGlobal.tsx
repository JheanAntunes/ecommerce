'use client'

import { PropsWithChildren } from 'react'
import ProviderMenuHamburguer from './ProviderMenuHambur/ProviderMenuHamburguer'

function ProviderGlobal({ children }: PropsWithChildren) {
    return <ProviderMenuHamburguer>{children}</ProviderMenuHamburguer>
}

export default ProviderGlobal
