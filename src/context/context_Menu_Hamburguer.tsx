import useToggle from '@/hook/Toggle/useToggle'
import { createContext } from 'react'

type Type_Context_Menu_Hamburguer = {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    shortcut_Set_Toggle_Function: () => void
}

export const Context_Menu_Hamburguer =
    createContext<Type_Context_Menu_Hamburguer | null>(null)

export function Context_Menu_Hamburguer_Provider({
    children,
}: React.PropsWithChildren) {
    const toggle = useToggle()

    return (
        <Context_Menu_Hamburguer.Provider value={{ ...toggle }}>
            {children}
        </Context_Menu_Hamburguer.Provider>
    )
}
