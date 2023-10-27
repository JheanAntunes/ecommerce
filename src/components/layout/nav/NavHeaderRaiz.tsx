import { Separator } from '@/components/ui/separator'
import { User2 } from 'lucide-react'
import Link from 'next/link'
import LogoNavHeaderRaiz from '../logo/LogoNavHeaderRaiz'
import Menu_Close_Click_Link from '../MenuHamburguer/Menu_Close_Click_Link'
import { Menu_Content_Categoria } from '../MenuHamburguer/Menu_Content_Categoria'
import Menu_Content_Frame from '../MenuHamburguer/Menu_Content_Frame'
import Menu_Content_Li from '../MenuHamburguer/Menu_Content_Li'
import Menu_Hamburguer_Toggle from '../MenuHamburguer/Menu_Hamburguer_Toggle'
import Menu_Open_Click_Close from '../MenuHamburguer/Menu_Open_Click_Close'
import NavCart from './nav-cart'
import NavHeartQtd from './nav-heart-qtd'
import NavIconHeartQtd from './nav-icon-heart-qtd'

function NavHeaderRaiz() {
    return (
        <nav className="col-start-2 col-end-2 flex items-center justify-between">
            <LogoNavHeaderRaiz />
            <Menu_Hamburguer_Toggle>
                <Menu_Content_Frame>
                    <div className="mb-3 flex items-center justify-between">
                        <Menu_Close_Click_Link>
                            <Link href="/" className="text-slate-800">
                                E-commerce
                            </Link>
                        </Menu_Close_Click_Link>
                        <Menu_Open_Click_Close />
                    </div>
                    <Menu_Close_Click_Link>
                        <ul className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <Menu_Content_Li>
                                    <NavCart className="flex items-center justify-between">
                                        Carrinho
                                    </NavCart>
                                </Menu_Content_Li>
                                <Separator />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Menu_Content_Li className="flex justify-between">
                                    produtos{' '}
                                    <span className="text-slate-200">com</span>{' '}
                                    <div className="relative">
                                        {' '}
                                        <NavHeartQtd />{' '}
                                    </div>
                                </Menu_Content_Li>
                                <Separator />
                            </div>
                        </ul>
                    </Menu_Close_Click_Link>
                    <Menu_Content_Categoria />
                </Menu_Content_Frame>
            </Menu_Hamburguer_Toggle>
            <div className="flex items-center gap-5 @xs:hidden @md:flex">
                <User2 className="text-slate-800" />
                <NavIconHeartQtd />
                <NavCart />
            </div>
        </nav>
    )
}

export default NavHeaderRaiz
