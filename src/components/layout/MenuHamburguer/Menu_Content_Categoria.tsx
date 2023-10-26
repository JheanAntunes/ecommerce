import { ArrowDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export function Menu_Content_Categoria() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="mt-5 h-7 w-full justify-between border-none bg-transparent p-0 text-xl text-slate-800"
                >
                    Categoria{' '}
                    <ArrowDown
                        height={20}
                        width={20}
                        className="text-slate-800"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    <span className="font-poppins text-slate-800">
                        melhores categorias.
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href="#" className="font-poppins text-slate-800">
                            Celular
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="#" className="font-poppins text-slate-800">
                            Notebook
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="#" className="font-poppins text-slate-800">
                            Perfumes
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
