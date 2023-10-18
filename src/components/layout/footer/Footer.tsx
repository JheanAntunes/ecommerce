import Footer_Section_Ajuda from './footer-section-ajuda/footer_section_ajuda'
import Footer_Section_Compra_Segura from './footer-section-compra-segura/Footer_Section_Compra_Segura'
import Footer_Section_Rede_Sociais from './footer-section-rede-sociais/Footer_Section_Rede_Sociais'

function Footer() {
    return (
        <footer className="grid @xs:grid-cols-layoutGridXs @sm:grid-cols-layoutGridSm @md:grid-cols-layoutGridMd @lg:grid-cols-layoutGridLg @xl:grid-cols-layoutGridXl @2xl:grid-cols-layoutGrid2xl @3xl:grid-cols-layoutGrid3xl @4xl:grid-cols-layoutGrid4xl @5xl:grid-cols-layoutGrid5xl @6xl:grid-cols-layoutGrid6xl @7xl:grid-cols-layoutGrid7xl">
            <div className="col-start-2 col-end-2 mt-16 flex w-full flex-wrap justify-between gap-5 pb-16">
                <Footer_Section_Compra_Segura />
                <Footer_Section_Ajuda />
                <Footer_Section_Rede_Sociais />
            </div>
        </footer>
    )
}

export default Footer
