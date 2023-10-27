'use client'
import useContextMenu from '@/hook/useContextMenu/useContextMenu'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

function Menu_Close_Click_Link({
    children,
    className,
    ...props
}: ComponentProps<'div'>) {
    const { shortcut_Set_Toggle_Function } = useContextMenu()

    return (
        <div
            className={cn('', {}, className)}
            onClick={shortcut_Set_Toggle_Function}
            {...props}
        >
            {children}
        </div>
    )
}

export default Menu_Close_Click_Link
