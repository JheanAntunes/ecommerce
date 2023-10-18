'use client'

import { Context_Product_Like_Provider } from '@/context/context_Product_Like'
import { PropsWithChildren } from 'react'

function ProviderProductLike({ children }: PropsWithChildren) {
    return (
        <Context_Product_Like_Provider>
            {children}
        </Context_Product_Like_Provider>
    )
}

export default ProviderProductLike
