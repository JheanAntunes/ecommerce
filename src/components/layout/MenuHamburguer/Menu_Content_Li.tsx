import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type Type_Menu_Content_Li_Props = ComponentProps<'li'>
function Menu_Content_Li({
    children,
    className,
    ...props
}: Type_Menu_Content_Li_Props) {
    return (
        <li
            {...props}
            className={cn(
                'items-center text-xl font-medium text-slate-800',
                {},
                className
            )}
        >
            {children}
        </li>
    )
}

export default Menu_Content_Li
