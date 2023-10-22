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
import { Trash2 } from 'lucide-react'

type Type_CartProductRemove_Props = {
    id: string
    name: string
}

function CartProductRemove({ id, name }: Type_CartProductRemove_Props) {
    const { toast } = useToast()

    const handleClickRemoveProduct = () => {
        //message remove product.
        toast({
            title: `${name}`,
            description: `Se desejar, você pode retornar à página de produto e adicionar novamente o ${name} no carrinho.`,
        })
    }
    return (
        <div className="absolute right-0 top-0 -translate-y-3 translate-x-2">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        size="icon"
                        aria-label={`remover ${name} do carrinho`}
                        className="rounded-full bg-slate-50 shadow hover:bg-slate-100"
                    >
                        <Trash2
                            className="text-red-500 @5xl:text-red-600"
                            width={20}
                            height={20}
                        />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="font-sans font-normal text-slate-800">
                            Você tem certeza absoluta?
                        </DialogTitle>
                        <DialogDescription className="text-slate-700">
                            Essa ação não pode ser desfeita. Tem certeza de que
                            deseja remover{' '}
                            <span className="text-slate-800">{name}</span> seu
                            carrinho?
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
                                onClick={handleClickRemoveProduct}
                            >
                                Sim
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CartProductRemove
