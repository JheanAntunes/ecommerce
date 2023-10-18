import { TypographyDecoradorH1 } from '@/components/Typography/typography'
import { ShieldCheckIcon } from 'lucide-react'
import Footer_section_ajuda_li from './footer_section_ajuda_li'

function Footer_Section_Ajuda() {
    return (
        <section className="flex flex-col gap-5">
            <TypographyDecoradorH1 className="text-xl before:h-5 @5xl:text-xl @5xl:before:h-5">
                Ajuda <ShieldCheckIcon className="h-5 w-5" />
            </TypographyDecoradorH1>
            <ul className="flex flex-col gap-2">
                <Footer_section_ajuda_li>
                    Dúvidas Gerais{' '}
                </Footer_section_ajuda_li>
                <Footer_section_ajuda_li>
                    Entregas Pedidos{' '}
                </Footer_section_ajuda_li>
                <Footer_section_ajuda_li>
                    Trocas Devoluções{' '}
                </Footer_section_ajuda_li>
            </ul>
        </section>
    )
}

export default Footer_Section_Ajuda
