import { PropsWithChildren } from 'react'

function Main({ children }: PropsWithChildren) {
    return (
        <main className="grid @xs:grid-cols-layoutGridXs @sm:grid-cols-layoutGridSm @md:grid-cols-layoutGridMd @lg:grid-cols-layoutGridLg @xl:grid-cols-layoutGridXl @2xl:grid-cols-layoutGrid2xl @3xl:grid-cols-layoutGrid3xl @4xl:grid-cols-layoutGrid4xl @5xl:grid-cols-layoutGrid5xl @6xl:grid-cols-layoutGrid6xl @7xl:grid-cols-layoutGrid7xl">
            {children}
        </main>
    )
}

export default Main
