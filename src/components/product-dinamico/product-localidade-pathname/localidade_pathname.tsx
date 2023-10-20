import { TypographySmall } from '@/components/Typography/typography'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type Type_Localidade_Pathname_Props = {
    titleProduct: string
}

function Localidade_Pathname({ titleProduct }: Type_Localidade_Pathname_Props) {
    return (
        <div className="flex items-center gap-5">
            {/* localização em que page usuario está atualmente. */}
            <Link href="/">
                <TypographySmall>E-commerce</TypographySmall>
            </Link>
            <ChevronRight width={20} height={20} />
            <TypographySmall>Produtos</TypographySmall>
            <ChevronRight width={20} height={20} />
            <Link href="#">
                <TypographySmall className="flex items-center gap-1 text-slate-800 before:block before:h-3 before:w-1 before:rounded before:bg-blue-600 before:content-['']">
                    {titleProduct}
                </TypographySmall>
            </Link>
        </div>
    )
}

export default Localidade_Pathname
