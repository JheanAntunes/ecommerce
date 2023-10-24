'use client'
import {
    TypographyDecoradorH3,
    TypographySmall,
} from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Minus, Plus } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

type Type_Cart_Product_Qtd_Increment_Decrement_Props = {
    id: string
    quantity: number
    name: string
}

function Cart_Product_Qtd_Increment_Decrement({
    id,
    quantity,
    name,
}: Type_Cart_Product_Qtd_Increment_Decrement_Props) {
    const { incrementItem, decrementItem } = useShoppingCart()
    const { toast } = useToast()

    const handleClickIncrement = () => {
        //message
        toast({
            title: `${name}`,
            description: `Você adicionou mais um ${name}.`,
        })
        //increment product.
        incrementItem(id)
    }

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

    return (
        <div className="flex flex-col gap-5">
            <TypographyDecoradorH3 className="border-b pb-3 text-lg before:h-4 @5xl:text-xl @5xl:before:h-5">
                Quantidade
            </TypographyDecoradorH3>
            <div className="flex items-center justify-between gap-5">
                <Button
                    className="bg-transparent hover:bg-slate-100"
                    variant="outline"
                    size="icon"
                    onClick={handleClickDecrement}
                >
                    <Minus />
                </Button>
                <TypographySmall className="text-xl text-slate-800">
                    {quantity}
                </TypographySmall>
                <Button
                    className="bg-transparent hover:bg-slate-100"
                    variant="outline"
                    size="icon"
                    onClick={handleClickIncrement}
                >
                    <Plus />
                </Button>
            </div>
        </div>
    )
}

export default Cart_Product_Qtd_Increment_Decrement
