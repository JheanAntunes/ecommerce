'use client'
import React from 'react'

type Type_Wrapper_Menu_HamburguerProps = React.PropsWithChildren & {
    shortcut_Set_Toggle_Function: () => void
}

function Wrapper_Menu_Hamburguer({
    children,
    shortcut_Set_Toggle_Function,
}: Type_Wrapper_Menu_HamburguerProps) {
    const handle_Click_Out_Menu_Close = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.currentTarget === event.target) shortcut_Set_Toggle_Function()
    }

    return (
        <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={handle_Click_Out_Menu_Close}
        >
            {children}
        </div>
    )
}

export default Wrapper_Menu_Hamburguer
