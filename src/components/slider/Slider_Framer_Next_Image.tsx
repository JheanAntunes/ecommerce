import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

type Type_Image_Props = ImageProps & React.ComponentProps<'img'>

const ExoticImage = forwardRef<HTMLImageElement, Type_Image_Props>(
    function ExoticImageWrapper({ ...props }, ref) {
        return <Image {...props} ref={ref} alt="ImageSlider" /> // ❌  this is not forwarded
    }
)
const MotionComponent = motion(ExoticImage)

export default MotionComponent
