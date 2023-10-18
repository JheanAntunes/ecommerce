import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

function Footer_Section_Compra_Segura_Accordion() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full min-w-full @5xl:min-w-[500px]"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>Segurança</AccordionTrigger>
                <AccordionContent>
                    Nós garantimos a segurança da compra e do produto até sua
                    casa.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Tranquilidade</AccordionTrigger>
                <AccordionContent>
                    Qualquer problema nós reembolsamos o seu dinheiro.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Economia</AccordionTrigger>
                <AccordionContent>
                    Nossos produtos tem os menores preços no mercado.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Footer_Section_Compra_Segura_Accordion
