import { Suspense } from 'react'
import { TypographyDecoradorH1 } from '../Typography/typography'
import Mais_Vendidos_GET_DADOS from './Mais_Vendidos_GET_DADOS'

function Section_Mais_Vendidos_Produtos() {
    return (
        <section className="col-start-2 col-end-2 mt-16 flex flex-col gap-5 overflow-hidden">
            <TypographyDecoradorH1>Mais vendidos</TypographyDecoradorH1>

            <Suspense fallback={<p>Carregando...</p>}>
                {/* @ts-ignore */}
                <Mais_Vendidos_GET_DADOS />
            </Suspense>
        </section>
    )
}

export default Section_Mais_Vendidos_Produtos
