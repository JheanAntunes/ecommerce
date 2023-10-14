import { Type_Api_DATA } from '@/schema/api/schema_Api_data'
import { product_ImgThumb_Description_Title_formated_Array } from '@/utils/product_ImgThumb_formated_Array_ImgThumb'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    fallback: ['sans-serif', 'serif'],
})

async function Mais_Vendidos_GET_DADOS() {
    const response = await fetch('http://localhost:3000/api/GET_DATA_PRODUCTS')
    if (!response.ok) throw new Error('ERROR: Slider_Server_GET_DADOS')
    const data: Type_Api_DATA = await response.json()
    const data_Image_Description_Title =
        product_ImgThumb_Description_Title_formated_Array(data)

    return (
        <div className="flex flex-nowrap gap-5 overflow-x-scroll">
            {data_Image_Description_Title.map(
                ({ description, image_thumbnail, title }) => (
                    <div
                        key={title}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="relative h-28 w-44 overflow-hidden rounded-xl">
                            <Image
                                src={image_thumbnail}
                                alt={description}
                                fill
                                sizes="200px"
                                className="object-contain"
                            />
                        </div>
                        <span
                            className={`${poppins.className} text-base font-medium`}
                        >
                            {title}
                        </span>
                    </div>
                )
            )}
        </div>
    )
}

export default Mais_Vendidos_GET_DADOS
