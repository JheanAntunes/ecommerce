import HeaderRaiz from '@/components/layout/header/HeaderRaiz'
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
                    <main className="grid @xs:grid-cols-layoutGridXs @sm:grid-cols-layoutGridSm @md:grid-cols-layoutGridMd @lg:grid-cols-layoutGridLg @xl:grid-cols-layoutGridXl @2xl:grid-cols-layoutGrid2xl @3xl:grid-cols-layoutGrid3xl @4xl:grid-cols-layoutGrid4xl @5xl:grid-cols-layoutGrid5xl @6xl:grid-cols-layoutGrid6xl @7xl:grid-cols-layoutGrid7xl">
                        {children}
                    </main>
                </ProviderGlobal>
            </body>
        </html>
    )
}
