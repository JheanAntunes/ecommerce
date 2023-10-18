'use client'
import { createContext, useState } from 'react'

//1: Criar a tipagem do contexto.
type Type_Context_Product_Like = {
    qtdHeart: number
    setQtdHeart: React.Dispatch<React.SetStateAction<number>>
}

//0: Criar o contexto.
const Context_Product_Like = createContext<null | Type_Context_Product_Like>(
    null
)

//02: Provider do contexto.
function Context_Product_Like_Provider({ children }: React.PropsWithChildren) {
    const [qtdHeart, setQtdHeart] = useState(0)

    return (
        <Context_Product_Like.Provider value={{ qtdHeart, setQtdHeart }}>
            {children}
        </Context_Product_Like.Provider>
    )
}

export { Context_Product_Like, Context_Product_Like_Provider }
