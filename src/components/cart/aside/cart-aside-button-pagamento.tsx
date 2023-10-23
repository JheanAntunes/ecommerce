'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { formated_CartDetails_Object_value } from '@/utils/formated_CartDetails_Object_value'
import { Banknote } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

function CartAsideButtonPagamento() {
    const { cartDetails } = useShoppingCart()
    const { toast } = useToast()

    const productCart = formated_CartDetails_Object_value(cartDetails)

    return (
        <>
            <Button
                className="gap-2 bg-blue-500 hover:bg-blue-600"
                onClick={() => {
                    if (!productCart.length) {
                        toast({
                            title: 'Carrinho está vazio.',
                            description:
                                'Por favor, adicione um produto no carrinho para você pagar.',
                            variant: 'destructive',
                        })
                        return
                    }
                    toast({
                        title: 'Obrigado por comprar os produtos.',
                    })
                }}
            >
                Pagamento <Banknote />
            </Button>
        </>
    )
}

export default CartAsideButtonPagamento
