import { Context_Menu_Hamburguer } from '@/context/context_Menu_Hamburguer'
import { useContext } from 'react'

function useContextMenu() {
    const contextMenu = useContext(Context_Menu_Hamburguer)
    if (!contextMenu)
        throw new Error(
            'useContextMenu: Você está tentando acessar o contexto em componente que não está envelopado no Provider.'
        )

    return contextMenu
}

export default useContextMenu
