'use client'
import useLogicLikeProduct, {
    Type_useLogicLikeProduct_Props
} from '@/components/section-produtos/useLogicLikeProduct'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getLocalStorage } from '@/utils/utils_getLocalStorage'
import { Heart } from 'lucide-react'
import { ComponentProps, useEffect } from 'react'

type Type_Product_Detalhes_Like_Props = Type_useLogicLikeProduct_Props &
    ComponentProps<'div'>

function Product_Detalhes_Like({
    id_product,
    image_thumbnail,
    titleProduct,
    className,
}: Type_Product_Detalhes_Like_Props) {
    const {
        likeProduct,
        verificated_IdProduct,
        setToggle,
        chaveLocalStorage,
        shortcut_Condional,
    } = useLogicLikeProduct({ id_product, image_thumbnail, titleProduct })

    useEffect(() => {
        if (getLocalStorage(chaveLocalStorage)) {
            const data_Product_Like_LocalStorage: number[] = JSON.parse(
                getLocalStorage(chaveLocalStorage)!
            )

            const id_find_Product =
                data_Product_Like_LocalStorage.find(shortcut_Condional)
            if (id_find_Product) setToggle(true)
        }
    }, [setToggle, chaveLocalStorage, shortcut_Condional])

    return (
        <div className={cn("",{},className)}>
            <Button
                size="icon"
                className="bg-transparent hover:bg-transparent"
                onClick={() => {
                    verificated_IdProduct()
                }}
            >
                <Heart
                    className={cn(
                        'text-red-500 transition-colors @5xl:hover:fill-red-500',
                        likeProduct ? 'fill-red-500' : false
                    )}
                />
                <span className="sr-only">
                    Clique para adicionar o gostei nesse produto. O gostei do
                    produto está em{' '}
                    {likeProduct ? 'gostei' : 'não, clique para colocar gostei'}
                </span>
            </Button>
        </div>
    )
}

export default Product_Detalhes_Like
