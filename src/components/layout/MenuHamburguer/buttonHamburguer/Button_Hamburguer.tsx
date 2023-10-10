import { Button, ButtonProps } from '@/components/ui/button'

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
            className=" bg-slate-50 hover:bg-transparent @md/nav:hidden"
            {...props}
        >
            {children}
        </Button>
    )
}

export default Button_Hamburguer
