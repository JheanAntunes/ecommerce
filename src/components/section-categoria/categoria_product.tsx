import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

type Type_Categoria_Product = {
    href: string
    src: string | StaticImport
    alt: string
    text: string
}

function Categoria_Product({ alt, href, src, text }: Type_Categoria_Product) {
    return (
        <Link href={href} className="flex flex-col items-center gap-2">
            <div className="relative h-20 w-20 overflow-hidden rounded-full @xs:h-16 @xs:w-16">
                <Image
                    src={src}
                    fill
                    alt={alt}
                    sizes="80px"
                    className="object-cover"
                />
            </div>
            <span className="font-medium text-slate-800">{text}</span>
        </Link>
    )
}

export default Categoria_Product
