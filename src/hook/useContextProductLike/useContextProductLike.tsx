import { Context_Product_Like } from '@/context/context_Product_Like'
import { useContext } from 'react'

function useContextProductLike() {
    //criar a variavel que vai receber o retorno do hook useContext;
    const context = useContext(Context_Product_Like)
    if (!context)
        throw new Error(
            'useContextProductLike: Você está tentando acessar o contexto em componente que não está envelopado no Provider.'
        )

    return context
}

export default useContextProductLike
