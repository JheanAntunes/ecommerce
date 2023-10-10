import { Petit_Formal_Script } from 'next/font/google'
import Link from 'next/link'

const petit_Formal_Script = Petit_Formal_Script({
    weight: ['400'],
    subsets: ['latin'],
    fallback: ['sans-serif', 'serif'],
})

function LogoNavHeaderRaiz() {
    return (
        <Link href="/">
            <span
                className={`${petit_Formal_Script.className} text-3xl text-slate-800`}
            >
                E-commerce
            </span>
        </Link>
    )
}

export default LogoNavHeaderRaiz
