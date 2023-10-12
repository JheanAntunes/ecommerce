import { Type_Api_DATA } from '@/schema/api/schema_Api_data'
import { product_ImgThumb_formated_Array_ImgThumb } from '@/utils/product_ImgThumb_formated_Array_ImgThumb'

import WrapperSlider from '@/components/slider/wrapperSlider'

async function Slider_Server_GET_DADOS() {
    const response = await fetch('http://localhost:3000/api/GET_DATA_PRODUCTS')
    if (!response.ok) throw new Error('ERROR: Slider_Server_GET_DADOS')
    const data: Type_Api_DATA = await response.json()
    const images_Thumb = product_ImgThumb_formated_Array_ImgThumb(data)
    return <WrapperSlider images_Thumb={images_Thumb} />
}

export default Slider_Server_GET_DADOS
