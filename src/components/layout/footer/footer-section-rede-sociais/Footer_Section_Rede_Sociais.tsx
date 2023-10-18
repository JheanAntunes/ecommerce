import { TypographyDecoradorH1 } from '@/components/Typography/typography'
import Footer_Section_Rede_Social_Wrapper from './Footer_Section_Rede_Social_Wrapper'

function Footer_Section_Rede_Sociais() {
    return (
        <section className="flex flex-col gap-5">
            <TypographyDecoradorH1 className="text-xl before:h-5 @5xl:text-xl @5xl:before:h-5">
                Nossa rede sociais
            </TypographyDecoradorH1>
            <Footer_Section_Rede_Social_Wrapper />
        </section>
    )
}

export default Footer_Section_Rede_Sociais
