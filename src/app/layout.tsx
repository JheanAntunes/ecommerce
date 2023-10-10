import HeaderRaiz from '@/components/layout/header/HeaderRaiz'
import ProviderGlobal from '@/providers/ProviderGlobal'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
    title: 'E-commerce',
    description: 'Um projeto para praticar.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className={roboto.className}>
                <ProviderGlobal>
                    <HeaderRaiz />
                    <main>{children}</main>
                </ProviderGlobal>
            </body>
        </html>
    )
}
