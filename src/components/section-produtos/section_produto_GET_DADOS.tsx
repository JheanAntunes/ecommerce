import { Type_Api_DATA } from '@/schema/api/schema_Api_data'
import { TypographyDecoradorH1 } from '../Typography/typography'
import Section_Card_Produto from './section_card_produto'

async function Section_Card_Produto_GET_DADOS() {
    // if (!process.env.domain) return null
    const response = await fetch(`https://dummyjson.com/products?limit=8`)
    if (!response.ok) throw new Error('ERROR: Mais_Vendidos_GET_DADOS')
    const data: Type_Api_DATA = await response.json()
    return (
        <section className="col-start-2 col-end-2 mt-16">
            <TypographyDecoradorH1>Produtos</TypographyDecoradorH1>
            <Section_Card_Produto data_products={data.products} />
        </section>
    )
}

export default Section_Card_Produto_GET_DADOS
