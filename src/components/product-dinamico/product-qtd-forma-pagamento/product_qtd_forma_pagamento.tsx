import { TypographyDecoradorH3 } from '@/components/Typography/typography'
import Image from 'next/image'
import SvgBoleto from '../../../svgs/boleto.svg'
import SvgMasterCard from '../../../svgs/mastercard.svg'
import SvgPix from '../../../svgs/pix-106.svg'
import SvgVisa from '../../../svgs/visa.svg'
type Type_Product_Qtd_Forma_Pagamento_Props = {
    price: number
    id: string
    name: string
}
function Product_Qtd_Forma_Pagamento({
    price,
}: Type_Product_Qtd_Forma_Pagamento_Props) {
    return (
        <div className="mt-5 flex flex-col gap-5 @2xl:col-span-2 @5xl:col-span-1">
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
        </div>
    )
}

export default Product_Qtd_Forma_Pagamento
