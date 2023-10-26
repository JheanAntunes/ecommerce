'use client'
import { PropsWithChildren } from 'react'

function Menu_Content_Frame({ children }: PropsWithChildren) {
    return (
        <div className="absolute inset-y-0 right-0 w-full max-w-xs animate-fade-left border-l border-slate-100 bg-slate-50 p-5 shadow transition-all animate-delay-200 animate-duration-[400ms] animate-ease-linear">
            {children}
        </div>
    )
}

export default Menu_Content_Frame
