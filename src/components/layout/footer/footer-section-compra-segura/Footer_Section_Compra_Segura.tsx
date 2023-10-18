import { TypographyDecoradorH1 } from '@/components/Typography/typography'
import { ShieldCheckIcon } from 'lucide-react'
import Footer_Section_Compra_Segura_Accordion from './Footer_Section_Compra_Segura_Accordion'

function Footer_Section_Compra_Segura() {
    return (
        <section className="flex flex-col gap-5">
            <TypographyDecoradorH1 className="text-xl before:h-5 @5xl:text-xl @5xl:before:h-5">
                Compra segura <ShieldCheckIcon className="h-5 w-5" />
            </TypographyDecoradorH1>
            <Footer_Section_Compra_Segura_Accordion />
        </section>
    )
}

export default Footer_Section_Compra_Segura
