'use client'
import {
    TypographyDecoradorH3,
    TypographySmall,
} from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'

type Type_Product_Qtd_Increment_Decrement_Props = {
    handleClickIncrement: () => void
    quantity: number
    handleClickDecrement: () => void
}

function Product_Qtd_Increment_Decrement({
    handleClickDecrement,
    handleClickIncrement,
    quantity,
}: Type_Product_Qtd_Increment_Decrement_Props) {
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

export default Product_Qtd_Increment_Decrement
