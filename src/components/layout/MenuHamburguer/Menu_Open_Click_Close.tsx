'use client'
import useContextMenu from '@/hook/useContextMenu/useContextMenu'
import { X } from 'lucide-react'
import Button_Hamburguer from './buttonHamburguer/Button_Hamburguer'

function Menu_Open_Click_Close() {
    const { shortcut_Set_Toggle_Function, toggle } = useContextMenu()

    return (
        <Button_Hamburguer
            shortcut_Set_Toggle_Function={shortcut_Set_Toggle_Function}
            toggle={toggle}
        >
            <X className="animate-fade text-slate-800" />
        </Button_Hamburguer>
    )
}

export default Menu_Open_Click_Close
