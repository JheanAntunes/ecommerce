import { cn } from '@/lib/utils'
import Link from 'next/link'

function Footer_Section_Rede_Social({
    children,
    className,
}: React.ComponentProps<'div'>) {
    return (
        <Link href="#">
            <div
                className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300',
                    {},
                    className
                )}
            >
                {children}
            </div>
        </Link>
    )
}

export default Footer_Section_Rede_Social
