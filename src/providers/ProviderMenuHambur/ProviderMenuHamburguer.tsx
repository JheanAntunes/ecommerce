'use client'

import { Context_Menu_Hamburguer_Provider } from '@/context/context_Menu_Hamburguer'

function ProviderMenuHamburguer({ children }: React.PropsWithChildren) {
    return (
        <Context_Menu_Hamburguer_Provider>
            {children}
        </Context_Menu_Hamburguer_Provider>
    )
}

export default ProviderMenuHamburguer
