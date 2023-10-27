import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

type Type_Image_Props = ImageProps & React.ComponentProps<'img'>

const ExoticImage = forwardRef<HTMLImageElement, Type_Image_Props>(
    function ExoticImageWrapper({ alt, ...props }, ref) {
        return (
            <Image
                {...props}
                ref={ref}
                key={alt}
                alt={alt}
                sizes="(max-width: 768px) 512px, (max-width: 1200px) 768px, 50vw"
            />
        )
    }
)
const MotionComponent = motion(ExoticImage)

export default MotionComponent
