import { Type_Api_DATA } from '@/schema/api/schema_Api_data'
import { product_ImgThumb_Description_Title_formated_Array } from '@/utils/product_ImgThumb_formated_Array_ImgThumb'
import { TypographyDecoradorH1 } from '../Typography/typography'
import Section_Card_Produto from './section_card_produto'

async function Section_Card_Produto_GET_DADOS() {
    const response = await fetch('http://localhost:3000/api/GET_DATA_PRODUCTS')
    if (!response.ok) throw new Error('ERROR: Mais_Vendidos_GET_DADOS')
    const data: Type_Api_DATA = await response.json()
    const data_Image_Description_Title =
        product_ImgThumb_Description_Title_formated_Array(data)

    return (
        <section className="col-start-2 col-end-2 mt-16">
            <TypographyDecoradorH1>Produtos</TypographyDecoradorH1>
            <Section_Card_Produto
                data_Image_Description_Title={data_Image_Description_Title}
            />
        </section>
    )
}

export default Section_Card_Produto_GET_DADOS
