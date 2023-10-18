'use client'
import { useToast } from '@/components/ui/use-toast'
import useToggle from '@/hook/Toggle/useToggle'
import useContextProductLike from '@/hook/useContextProductLike/useContextProductLike'
import { getLocalStorage } from '@/utils/utils_getLocalStorage'
import { setLocalStorage } from '@/utils/utils_setLocalStorage'
import { useCallback, useEffect, useRef } from 'react'

type Type_useLogicLikeProduct_Props = {
    id_product: number
    titleProduct: string
    image_thumbnail: string
}

function useLogicLikeProduct({
    id_product,
    image_thumbnail,
    titleProduct,
}: Type_useLogicLikeProduct_Props) {
    const { setQtdHeart } = useContextProductLike()
    const { toast } = useToast()

    const { toggle: likeProduct, setToggle } = useToggle()

    const chaveLocalStorage = useRef<'product-like'>('product-like')
    const id_product_ref = useRef<number>(id_product)

    const shortcut_Condional = useCallback((current_index_value: number) => {
        return current_index_value === id_product_ref.current
    }, [])

    useEffect(() => {
        if (getLocalStorage(chaveLocalStorage.current)) {
            const data_Product_Like_LocalStorage: number[] = JSON.parse(
                getLocalStorage(chaveLocalStorage.current)!
            )

            const id_find_Product =
                data_Product_Like_LocalStorage.find(shortcut_Condional)

            if (id_find_Product) setToggle(true)
        }
    }, [shortcut_Condional, setToggle])

    const shortcut_Condional_Dif = (current_index_value: number) => {
        return current_index_value !== id_product_ref.current
    }

    const remove_ProductLike_LocalStorage = (
        data_Product_Like_LocalStorage: number[]
    ) => {
        const filter_Product_Like_localStorage =
            data_Product_Like_LocalStorage.filter(shortcut_Condional_Dif)

        setLocalStorage(
            chaveLocalStorage.current,
            JSON.stringify(filter_Product_Like_localStorage)
        )
    }

    const verificated_IdProduct = () => {
        if (getLocalStorage(chaveLocalStorage.current)) {
            const data_Product_Like_LocalStorage: number[] = JSON.parse(
                getLocalStorage(chaveLocalStorage.current)!
            )

            const id_find_Product =
                data_Product_Like_LocalStorage.find(shortcut_Condional)

            if (id_find_Product) {
                remove_ProductLike_LocalStorage(data_Product_Like_LocalStorage)
                //descrement heart
                setQtdHeart((qtdHeart) => qtdHeart - 1)
                //message
                toast({
                    description: `Você removeu o gostei no ${titleProduct}`,
                })
                setToggle(false)
                return //Parar a execução da função para não repetir o id no array.
            }
            //Caso não exista essa id no array que estava no localStorage, pegue todos os indices anteriores do array e incrementa com um novo indice com o valor do id do produto em um novo array.
            setLocalStorage(
                chaveLocalStorage.current,
                JSON.stringify([
                    ...data_Product_Like_LocalStorage,
                    id_product_ref.current,
                ])
            )
            //increment heart
            setQtdHeart(data_Product_Like_LocalStorage.length + 1)
            setToggle(true)
            //message
            toast({
                description: `Você adicionou o gostei no ${titleProduct}`,
            })
            return //Parar a execução da função para não continuar e substituir o valor.
        }
        console.log('declarando a chave')
        //declarando a chave com o valor de um array e id em index no localStorage.
        setLocalStorage(
            chaveLocalStorage.current,
            JSON.stringify([id_product_ref.current])
        )
        setQtdHeart(1)
        setToggle(true)
        //message
        toast({
            description: `Você adicionou o gostei no ${titleProduct}`,
        })
    }

    return {
        verificated_IdProduct,
        likeProduct,
    }
}

export default useLogicLikeProduct
