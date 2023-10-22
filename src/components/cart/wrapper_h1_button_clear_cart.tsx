import { TypographyDecoradorH1 } from '@/components/Typography/typography'
import Dialog_Clear_Cart from './Dialog_Clear_Cart'

function Wrapper_H1_Button_Clear_Cart() {
    return (
        <div className="flex h-20 items-center justify-between p-5 shadow">
            <TypographyDecoradorH1>Carrinho</TypographyDecoradorH1>
            <Dialog_Clear_Cart />
        </div>
    )
}

export default Wrapper_H1_Button_Clear_Cart
