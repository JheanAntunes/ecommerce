import { TypographyDecoradorH4 } from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import CartAsideButtonPagamento from './cart-aside-button-pagamento'
import CartAsideDetalhes from './cart-aside-detalhes'

function CartAside() {
    return (
        <aside className="flex h-72 flex-col gap-5 rounded-xl border p-5 shadow @4xl:sticky @4xl:top-0 @4xl:z-20">
            <TypographyDecoradorH4>Resumo</TypographyDecoradorH4>
            <CartAsideDetalhes />
            <CartAsideButtonPagamento />
            <Button variant="outline">Continuar Comprando</Button>
        </aside>
    )
}

export default CartAside
