'use client'

import { TypographySmall } from '@/components/Typography/typography'
import useContextProductLike from '@/hook/useContextProductLike/useContextProductLike'
import { cn } from '@/lib/utils'
import { getLocalStorage } from '@/utils/utils_getLocalStorage'
import { Heart } from 'lucide-react'
import { useEffect, useRef } from 'react'

function NavHeartQtd() {
    const chaveLocalStorage = useRef<'product-like'>('product-like')
    const { qtdHeart, setQtdHeart } = useContextProductLike()

    useEffect(() => {
        if (getLocalStorage(chaveLocalStorage.current)) {
            const data_Product_Like_LocalStorage: number[] = JSON.parse(
                getLocalStorage(chaveLocalStorage.current)!
            )

            setQtdHeart(data_Product_Like_LocalStorage.length)
        }
    }, [setQtdHeart])

    return (
        <>
            <TypographySmall className="absolute inset-0 flex items-center justify-center bg-transparent font-medium text-slate-50">
                {qtdHeart}
            </TypographySmall>
            <Heart
                className={cn(
                    'text-red-500 transition-colors duration-200 @5xl:hover:fill-red-500',
                    qtdHeart > 0 ? 'fill-red-500' : false
                )}
            />
        </>
    )
}

export default NavHeartQtd
