import { Type_Data_Image_Description } from '@/components/slider/Type_data_Image_Description'
import { Type_Api_DATA } from '@/schema/api/schema_Api_data'

export const product_ImgThumb_Description_Title_formated_Array = (
    data: Type_Api_DATA
): Type_Data_Image_Description[] => {
    const dataImageDescription = data.products.map((product) => {
        return {
            id: product.id,
            image_thumbnail: product.thumbnail,
            description: product.description,
            title: product.title,
            price: product.price,
        }
    })
    return dataImageDescription
}
