import NavHeaderRaiz from '../nav/NavHeaderRaiz'

function HeaderRaiz() {
    return (
        <header
            className={`@xl:grid-cols-layoutGridXl @6xl:grid-cols-layoutGrid6xl grid h-20 border-b border-b-slate-100 bg-slate-50 shadow shadow-slate-100 @xs:grid-cols-layoutGridXs @sm:grid-cols-layoutGridSm @md:grid-cols-layoutGridMd @lg:grid-cols-layoutGridLg @2xl:grid-cols-layoutGrid2xl @3xl:grid-cols-layoutGrid3xl @4xl:grid-cols-layoutGrid4xl @5xl:grid-cols-layoutGrid5xl @7xl:grid-cols-layoutGrid7xl`}
        >
            <NavHeaderRaiz />
        </header>
    )
}

export default HeaderRaiz
