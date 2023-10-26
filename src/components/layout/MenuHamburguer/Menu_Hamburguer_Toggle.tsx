'use client'

import useContextMenu from '@/hook/useContextMenu/useContextMenu'
import { Menu, X } from 'lucide-react'
import { PropsWithChildren } from 'react'
import Button_Hamburguer from './buttonHamburguer/Button_Hamburguer'
import Wrapper_Menu_Hamburguer from './Wrapper_Menu_Hamburguer'

function Menu_Hamburguer_Toggle({ children }: PropsWithChildren) {
    const { shortcut_Set_Toggle_Function, toggle } = useContextMenu()

    return (
        <>
            <Button_Hamburguer
                aria-haspopup={true}
                shortcut_Set_Toggle_Function={shortcut_Set_Toggle_Function}
                toggle={toggle}
            >
                {toggle ? (
                    <X
                        className={
                            'animate-fade text-slate-800 animate-ease-linear'
                        }
                    />
                ) : (
                    <Menu className="animate-fade text-slate-800 animate-ease-linear" />
                )}
            </Button_Hamburguer>

            {toggle && (
                <Wrapper_Menu_Hamburguer
                    shortcut_Set_Toggle_Function={shortcut_Set_Toggle_Function}
                    toggle={toggle}
                >
                    {children}
                </Wrapper_Menu_Hamburguer>
            )}
        </>
    )
}

export default Menu_Hamburguer_Toggle
