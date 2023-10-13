import { AnimatePresence } from 'framer-motion'
import { MutableRefObject } from 'react'
import { slideVariants } from '../framer/slider/slideVariants'
import MotionComponent from './Slider_Framer_Next_Image'
import { Type_Data_Image_Description } from './Type_data_Image_Description'

type Type_Wrapper_Image_Slider_Props = {
    currentImg: number
    slide_Direction_Animation: MutableRefObject<'right' | 'left'>
    images_Thumb: Array<Type_Data_Image_Description>
}

function Wrapper_Image_Slider({
    currentImg,
    images_Thumb,
    slide_Direction_Animation,
}: Type_Wrapper_Image_Slider_Props) {
    return (
        <div className="relative h-52 @xs:w-56 @sm:w-56 @md:w-72 @lg:w-80 @2xl:w-[448px]  @3xl:w-[512px] @4xl:w-[672px] @5xl:w-[48rem] ">
            <AnimatePresence>
                <MotionComponent
                    key={currentImg}
                    variants={slideVariants}
                    initial={
                        slide_Direction_Animation.current === 'right'
                            ? 'hiddenRight'
                            : 'hiddenLeft'
                    }
                    animate="visible"
                    exit="exit"
                    src={images_Thumb[currentImg].image_thumbnail}
                    alt={images_Thumb[currentImg].description}
                    fill
                    className="object-contain"
                />
            </AnimatePresence>
        </div>
    )
}

export default Wrapper_Image_Slider
