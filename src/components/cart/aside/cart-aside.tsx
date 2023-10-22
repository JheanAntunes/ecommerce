import { TypographyDecoradorH4 } from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { Banknote } from 'lucide-react'
import CartAsideDetalhes from './cart-aside-detalhes'

function CartAside() {
    return (
        <aside className="sticky top-0 z-20 flex h-72 flex-col gap-5 rounded-xl border p-5 shadow">
            <TypographyDecoradorH4>Resumo</TypographyDecoradorH4>
            <CartAsideDetalhes />
            <Button className="gap-2 bg-blue-500 hover:bg-blue-600">
                Pagamento <Banknote />
            </Button>
            <Button variant="outline">Continuar Comprando</Button>
        </aside>
    )
}

export default CartAside
