import { TypographyDecoradorH1 } from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'

function NotFoundProductCart() {
    return (
        <section className="flex animate-fade flex-col items-center justify-center gap-5 transition-opacity">
            <TypographyDecoradorH1 className="font-sans @xs:text-base @xs:before:h-4 @md:text-xl @md:before:h-5 @2xl:text-3xl @2xl:before:h-7 @3xl:text-4xl @3xl:before:h-8 @5xl:text-5xl @5xl:before:h-9">
                Seu carrinho de compras está vazio.
            </TypographyDecoradorH1>
            <Button
                variant="outline"
                asChild
                className="w-full max-w-xs gap-1 bg-blue-500 font-sans font-bold text-slate-50 hover:bg-blue-600 hover:text-slate-200"
            >
                <Link href="/">
                    Ver produtos <NavigationIcon height={20} width={20} />
                </Link>
            </Button>
        </section>
    )
}

export default NotFoundProductCart
