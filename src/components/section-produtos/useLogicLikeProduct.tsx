'use client'
import useToggle from '@/hook/Toggle/useToggle'
import { getLocalStorage } from '@/utils/utils_getLocalStorage'
import { setLocalStorage } from '@/utils/utils_setLocalStorage'
import { useCallback, useEffect, useRef } from 'react'

function useLogicLikeProduct(id_product: number) {
    const {
        toggle: likeProduct,
        shortcut_Set_Toggle_Function,
        setToggle,
    } = useToggle()

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
            setToggle(true)
            return //Parar a execução da função para não continuar e substituir o valor.
        }
        console.log('declarando a chave')
        //declarando a chave com o valor de um array e id em index no localStorage.
        setLocalStorage(
            chaveLocalStorage.current,
            JSON.stringify([id_product_ref.current])
        )
        setToggle(true)
    }

    return {
        verificated_IdProduct,
        likeProduct,
        chaveLocalStorage,
        shortcut_Set_Toggle_Function,
        setToggle,
    }
}

export default useLogicLikeProduct
