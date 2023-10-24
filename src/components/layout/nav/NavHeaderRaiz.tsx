import { User2 } from 'lucide-react'
import LogoNavHeaderRaiz from '../logo/LogoNavHeaderRaiz'
import Menu_Hamburguer_Toggle from '../MenuHamburguer/Menu_Hamburguer_Toggle'
import Menu_Open_Click_Close from '../MenuHamburguer/Menu_Open_Click_Close'
import NavCart from './nav-cart'
import NavIconHeartQtd from './nav-icon-heart-qtd'

function NavHeaderRaiz() {
    return (
        <nav className="col-start-2 col-end-2 flex items-center justify-between">
            <LogoNavHeaderRaiz />
            <Menu_Hamburguer_Toggle>
                <div className="absolute inset-y-0 right-0 w-full max-w-xs animate-fade-right border-l border-slate-100 bg-slate-50 p-5 shadow animate-ease-linear">
                    <Menu_Open_Click_Close />
                </div>
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
