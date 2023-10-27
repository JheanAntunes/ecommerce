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
        <div className="relative h-full w-full overflow-hidden">
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
