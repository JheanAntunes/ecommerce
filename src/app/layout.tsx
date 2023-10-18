import Footer from '@/components/layout/footer/Footer'
import HeaderRaiz from '@/components/layout/header/HeaderRaiz'
import Main from '@/components/layout/Main/Main'
import { Toaster } from '@/components/ui/toaster'
import ProviderGlobal from '@/providers/ProviderGlobal'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

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
            <body className={roboto.className + ' overflow-x-hidden'}>
                <ProviderGlobal>
                    <HeaderRaiz />
                    <Main>{children}</Main>
                    <Footer />
                    <Toaster />
                </ProviderGlobal>
            </body>
        </html>
    )
}
