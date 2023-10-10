/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            screens: {
                '@xs': '20rem',
                '@sm': '24rem',
                '@md': '28rem',
                '@lg': '32rem',
                '@xl': '36rem',
                '@2xl': '42rem',
                '@3xl': '48rem',
                '@4xl': '56rem',
                '@5xl': '64rem',
                '@6xl': '72rem',
                '@7xl': '80rem',
            },
            gridTemplateColumns: {
                //Configuração do layout com grid.
                layoutGridXs: 'calc(50vw - 160px) 1fr calc(50vw - 160px)', //@xs: tela 320px
                layoutGridSm: 'calc(50vw - 192px) 1fr calc(50vw - 192px)', //@sm: tela 384px
                layoutGridMd: 'calc(50vw - 224px) 1fr calc(50vw - 224px)', //@md: tela 448px
                layoutGridLg: 'calc(50vw - 256px) 1fr calc(50vw - 256px)', //@lg: tela 512px
                layoutGridXl: 'calc(50vw - 288px) 1fr calc(50vw - 288px)', //@xl: tela 576px
                layoutGrid2xl: 'calc(50vw - 336px) 1fr calc(50vw - 336px)', //@2xl: tela 672px
                layoutGrid3xl: 'calc(50vw - 384px) 1fr calc(50vw - 384px)', //@3xl: tela 768px
                layoutGrid4xl: 'calc(50vw - 448px) 1fr calc(50vw - 448px)', //@4xl: tela 896px
                layoutGrid5xl: 'calc(50vw - 512px) 1fr calc(50vw - 512px)', //@5xl: tela 1024px
                layoutGrid6xl: 'calc(50vw - 576px) 1fr calc(50vw - 576px)', //@6xl: tela 1152px
                layoutGrid7xl: 'calc(50vw - 640px) 1fr calc(50vw - 640px)', //@7xl: tela 1280px
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/container-queries'),
        require('tailwindcss-animated'),
    ],
}
