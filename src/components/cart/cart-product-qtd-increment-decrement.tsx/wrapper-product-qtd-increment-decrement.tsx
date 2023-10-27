'use client'
import { useToast } from '@/components/ui/use-toast'
import { useShoppingCart } from 'use-shopping-cart'
import Product_Qtd_Increment_Decrement from './product-qtd-increment-decrement'

type Type_handleClickDecrement_Params = {
    quantity: number
    id: string
    name: string
}

function WrapperProductQtdIncrementDecrement({
    id,
    name,
    quantity,
}: Type_handleClickDecrement_Params) {
    const { toast } = useToast()
    const { decrementItem, incrementItem } = useShoppingCart()

    const handleClickDecrement = () => {
        if (quantity === 1) {
            toast({
                title: `Quero remover o ${name}.`,
                description: `Por favor, se quiser removê-lo do carrinho, clique no ícone da lixeira.`,
                variant: 'destructive',
            })
            return //parar execução da função.
        }
        //message decrement
        toast({
            title: `${name}`,
            description: `Você reduziu mais um ${name}.`,
        })
        //decrement product.
        decrementItem(id)
    }

    const handleClickIncrement = () => {
        //message
        toast({
            title: `${name}`,
            description: `Você adicionou mais um ${name}.`,
        })
        //increment product.
        incrementItem(id)
    }

    return (
        <Product_Qtd_Increment_Decrement
            quantity={quantity}
            handleClickDecrement={handleClickDecrement}
            handleClickIncrement={handleClickIncrement}
        />
    )
}

export default WrapperProductQtdIncrementDecrement
