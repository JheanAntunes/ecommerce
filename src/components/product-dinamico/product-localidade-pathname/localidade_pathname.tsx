import { TypographySmall } from '@/components/Typography/typography'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

type Type_Localidade_Pathname_Props = {
    titleProduct: string
}

function Localidade_Pathname({
    titleProduct,
    children,
}: Type_Localidade_Pathname_Props & PropsWithChildren) {
    return (
        <div className="flex w-full items-center gap-5">
            {/* localização em que page usuario está atualmente. */}
            <Link href="/">
                <TypographySmall>E-commerce</TypographySmall>
            </Link>
            {children}
            <Link href="#">
                <TypographySmall className="flex items-center gap-1 text-slate-800 before:block before:h-3 before:w-1 before:rounded before:bg-blue-600 before:content-['']">
                    {titleProduct}
                </TypographySmall>
            </Link>
        </div>
    )
}

export default Localidade_Pathname
