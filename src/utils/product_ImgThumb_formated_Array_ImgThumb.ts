import { Type_Api_DATA } from '@/schema/api/schema_Api_data'

export const product_ImgThumb_formated_Array_ImgThumb = (
    data: Type_Api_DATA
): string[] => {
    const string_Formate_Url_Images = data.products.map(
        (product) => product.thumbnail
    )
    return string_Formate_Url_Images
}
