import { Suspense } from 'react'
import { TypographyH1 } from '../Typography/typography'
import Mais_Vendidos_GET_DADOS from './Mais_Vendidos_GET_DADOS'

function Mais_Vendidos_Produtos() {
    return (
        <section className="col-start-2 col-end-2 mt-10 flex flex-col gap-5 overflow-hidden">
            <TypographyH1 className='flex items-center gap-2 text-slate-800 before:block before:h-9 before:w-2 before:rounded before:bg-blue-600 before:content-[""]'>
                Mais vendidos
            </TypographyH1>

            <Suspense fallback={<p>Carregando...</p>}>
                {/* @ts-ignore */}
                <Mais_Vendidos_GET_DADOS />
            </Suspense>
        </section>
    )
}

export default Mais_Vendidos_Produtos
