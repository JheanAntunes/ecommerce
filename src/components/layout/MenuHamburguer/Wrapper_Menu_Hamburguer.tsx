'use client'
import React from 'react'
import Menu_Content_Frame from './Menu_Content_Frame'

type Type_Wrapper_Menu_HamburguerProps = React.PropsWithChildren & {
    shortcut_Set_Toggle_Function: () => void
    toggle: boolean
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
            className="absolute inset-0 z-30 h-screen animate-fade-up bg-background/60 backdrop-blur-sm"
            onClick={handle_Click_Out_Menu_Close}
        >
            <Menu_Content_Frame>{children}</Menu_Content_Frame>
        </div>
    )
}

export default Wrapper_Menu_Hamburguer
