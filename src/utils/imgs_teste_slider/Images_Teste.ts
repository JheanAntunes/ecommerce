import { Type_Data_Image_Description } from '@/components/slider/Type_data_Image_Description'

const Object_Data_Teste_Simulation0: Type_Data_Image_Description = {
    id: 0,
    image_thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    description: 'Teste0',
    title: 'abc',
    price: 200,
}
const Object_Data_Teste_Simulation01: Type_Data_Image_Description = {
    ...Object_Data_Teste_Simulation0,
    description: 'Teste1',
}

const Object_Data_Teste_Simulation02: Type_Data_Image_Description = {
    ...Object_Data_Teste_Simulation0,
    description: 'Teste2',
}

export const data_Image_Description: Type_Data_Image_Description[] = [
    Object_Data_Teste_Simulation0,
    Object_Data_Teste_Simulation01,
    Object_Data_Teste_Simulation02,
]
