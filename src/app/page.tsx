import Categoria from '@/components/section-categoria/categoria'
import Mais_Vendidos_Produtos from '@/components/section-mais-vendidos/Mais_Vendidos_Produtos'
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
            <Categoria />
            <Mais_Vendidos_Produtos />
            <div className="h-[800px]">dasdsa</div>
        </>
    )
}
