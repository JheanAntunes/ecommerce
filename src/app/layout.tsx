import Footer from '@/components/layout/footer/Footer'
import HeaderRaiz from '@/components/layout/header/HeaderRaiz'
import Main from '@/components/layout/Main/Main'
import { Toaster } from '@/components/ui/toaster'
import ProviderGlobal from '@/providers/ProviderGlobal'
import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import '../styles/globals.css'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-roboto',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'E-commerce',
    description: 'Um projeto para praticar.',
    generator: 'Next.js',
    applicationName: 'E-commerce',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [
        {
            name: 'Jhean',
            url: 'https://www.linkedin.com/in/jhean-antunes-lopes-284994259/',
        },
    ],
    colorScheme: 'only light',
    creator: 'Jhean',
    publisher: 'Sebastian Markbåge',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    themeColor: 'white',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br" className={`${roboto.variable} ${poppins.variable}`}>
            <body className="font-roboto">
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
