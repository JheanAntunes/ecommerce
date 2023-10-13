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
        </>
    )
}
