import {
    TypographyDecoradorH2,
    TypographyDecoradorH3,
} from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import SvgBoleto from '../../../svgs/boleto.svg'
import SvgMasterCard from '../../../svgs/mastercard.svg'
import SvgPix from '../../../svgs/pix-106.svg'
import SvgVisa from '../../../svgs/visa.svg'
type Type_Product_Qtd_Forma_Pagamento_Props = {
    price: number
}
function Product_Qtd_Forma_Pagamento({
    price,
}: Type_Product_Qtd_Forma_Pagamento_Props) {
    return (
        <section className="mt-5 flex flex-col gap-5 @2xl:col-span-2 @5xl:col-span-1">
            <TypographyDecoradorH2 className="text-lg text-slate-800 @5xl:text-2xl @5xl:before:h-6">
                Quantidade
            </TypographyDecoradorH2>
            <div className="flex items-center justify-between">
                <Button size="icon" variant="outline">
                    <Plus />
                </Button>
                <span className="text-3xl text-slate-800">0</span>
                <Button size="icon" variant="outline">
                    <Minus />
                </Button>
            </div>
            <div className="flex items-center justify-between">
                <span className=" text-slate-900">Preço total</span>
                <span className="text-slate-700">R$ {price}</span>
            </div>
            <section className="flex flex-col gap-5">
                <TypographyDecoradorH3 className="text-base text-slate-800 @5xl:text-lg @5xl:before:h-[18px]">
                    Forma de pagamento
                </TypographyDecoradorH3>
                <div className="flex flex-wrap gap-5">
                    <Image
                        src={SvgPix}
                        height={40}
                        width={40}
                        sizes="40"
                        alt="Forma de pagamento com pix"
                    />
                    <Image
                        src={SvgMasterCard}
                        height={40}
                        width={40}
                        sizes="40"
                        alt="Forma de pagamento com MasterCard"
                    />
                    <Image
                        src={SvgVisa}
                        height={40}
                        width={40}
                        sizes="40"
                        alt="Forma de pagamento com Visa"
                    />
                    <Image
                        src={SvgBoleto}
                        height={40}
                        width={40}
                        sizes="40"
                        alt="Forma de pagamento com Boleto"
                    />
                </div>
            </section>
        </section>
    )
}

export default Product_Qtd_Forma_Pagamento
