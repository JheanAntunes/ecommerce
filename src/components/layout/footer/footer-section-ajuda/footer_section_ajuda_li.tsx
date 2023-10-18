import { LucideLink } from 'lucide-react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

function Footer_section_ajuda_li({ children }: PropsWithChildren) {
    return (
        <li className='@5xl:hover:rounded" transition-colors @5xl:hover:bg-slate-100'>
            <Link
                href="#"
                className="flex items-center gap-2 p-1 text-slate-800"
            >
                <LucideLink width={20} height={20} className="text-slate-800" />
                {children}
            </Link>
        </li>
    )
}

export default Footer_section_ajuda_li
