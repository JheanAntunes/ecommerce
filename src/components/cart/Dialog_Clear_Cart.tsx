'use client'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { formated_CartDetails_Object_value } from '@/utils/formated_CartDetails_Object_value'
import { Trash2 } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

function Dialog_Clear_Cart() {
    const { toast } = useToast()
    const { clearCart, cartDetails } = useShoppingCart()

    const productCart = formated_CartDetails_Object_value(cartDetails)

    const handleClick_Clear_Cart = () => {
        toast({
            title: 'O carrinho foi limpo com sucesso.',
            description:
                'Se desejar, você pode retornar à página de produto e adicionar novamente os produto ao carrinho.',
        })
        clearCart()
    }

    return (
        <Dialog>
            <Button
                variant="outline"
                className="gap-2 border-red-500 bg-transparent text-red-500 hover:border-red-700 hover:bg-transparent hover:text-red-700"
                asChild
            >
                <DialogTrigger>
                    Limpar o carrinho{' '}
                    <Trash2
                        className="text-red-500 @5xl:hover:text-red-700"
                        height={20}
                        width={20}
                    />
                </DialogTrigger>
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-sans font-normal text-slate-800">
                        Você tem certeza absoluta?
                    </DialogTitle>
                    <DialogDescription className="text-slate-700">
                        Essa ação não pode ser desfeita. Tem certeza de que
                        deseja limpar seu carrinho?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="secondary"
                            className="flex-1"
                        >
                            Não
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button
                            type="button"
                            className="flex-1 bg-blue-500 hover:bg-blue-600"
                            onClick={() => {
                                //Mensagem para o usuário ao clicar no botão limpar carrinho quando ele estiver vazio.
                                if (!productCart.length) {
                                    toast({
                                        title: `Carrinho vazio.`,
                                        description: `Você pode voltar na página de produtos e adicionar no carrinho para limpar.`,
                                        variant: 'destructive',
                                    })
                                    //parar de executar essa função.
                                    return
                                }
                                handleClick_Clear_Cart()
                            }}
                        >
                            Sim
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Dialog_Clear_Cart
