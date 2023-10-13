import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '../ui/button'

type Type_Dot_Slider = {
    index: number
    currentImg: number
} & ButtonProps

function Dot_Slider({ index, currentImg, ...props }: Type_Dot_Slider) {
    return (
        <li>
            <Button
                size="icon"
                className={cn(
                    'h-5 w-5 rounded-full transition-colors duration-200 ease-linear',
                    index === currentImg ? 'bg-slate-700' : 'bg-slate-200'
                )}
                {...props}
            />
        </li>
    )
}

export default Dot_Slider
