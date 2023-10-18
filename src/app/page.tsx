import Section_Categoria from '@/components/section-categoria/section_Categoria'
import Section_Mais_Vendidos_Produtos from '@/components/section-mais-vendidos/section_Mais_Vendidos_Produtos'
import Section_Card_Produto_GET_DADOS from '@/components/section-produtos/section_produto_GET_DADOS'

import SkeletonSlider from '@/components/skeletons/slider/skeletonSlider'
import Slider_Server_GET_DADOS from '@/components/slider/Slider_Server_GET_DADOS'
import { Suspense } from 'react'

export default function Home() {
    return (
        <>
            <Suspense fallback={<SkeletonSlider />}>
                {/* @ts-ignore */}
                <Slider_Server_GET_DADOS />
            </Suspense>
            <Section_Categoria />
            <Section_Mais_Vendidos_Produtos />
            <Suspense fallback={<p>carregando...</p>}>
                {/* @ts-ignore */}
                <Section_Card_Produto_GET_DADOS />
            </Suspense>
        </>
    )
}
