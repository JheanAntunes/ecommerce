import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Type_Button_HamburguerProps = {
    toggle: boolean
    shortcut_Set_Toggle_Function: () => void
} & ButtonProps

function Button_Hamburguer({
    shortcut_Set_Toggle_Function,
    toggle,
    children,
    ...props
}: Type_Button_HamburguerProps) {
    return (
        <Button
            onClick={() => {
                shortcut_Set_Toggle_Function()
            }}
            size="icon"
            aria-expanded={toggle}
            aria-label="menu hamburguer"
            className={cn(
                'bg-transparent text-slate-800 hover:bg-transparent @md/nav:hidden',
                {
                    'justify-end': toggle,
                }
            )}
            {...props}
        >
            {children}
        </Button>
    )
}

export default Button_Hamburguer
