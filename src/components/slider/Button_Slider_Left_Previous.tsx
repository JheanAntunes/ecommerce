import { ArrowLeft } from 'lucide-react'
import { Button, ButtonProps } from '../ui/button'

function Button_Slider_Left_Previous(props: ButtonProps) {
    return (
        <Button
            size="icon"
            aria-label="Clique para pular para a imagem que está no lado esquerdo do carrossel."
            variant="outline"
            className="bg-slate-400 bg-transparent p-2 hover:bg-slate-500 hover:bg-transparent"
            {...props}
        >
            <span className="sr-only">
                Pular para imagem próxima imagem do lado esquerdo do carrossel
            </span>
            <ArrowLeft className="transition-transform hover:-translate-x-1" />
        </Button>
    )
}

export default Button_Slider_Left_Previous
