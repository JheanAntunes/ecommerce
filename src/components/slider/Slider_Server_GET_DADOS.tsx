import { Type_Api_DATA } from '@/schema/api/schema_Api_data'
import { product_ImgThumb_Description_Title_formated_Array } from '@/utils/product_ImgThumb_formated_Array_ImgThumb'

import WrapperSlider from '@/components/slider/wrapperSlider'

async function Slider_Server_GET_DADOS() {
    const response = await fetch(`${process.env.domain}/api/GET_DATA_PRODUCTS`)
    if (!response.ok) throw new Error('ERROR: Slider_Server_GET_DADOS')
    const data: Type_Api_DATA = await response.json()
    const dataImageDescription =
        product_ImgThumb_Description_Title_formated_Array(data)
    return <WrapperSlider dataImageDescription={dataImageDescription} />
}

export default Slider_Server_GET_DADOS
