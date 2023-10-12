'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import MotionComponent from './Slider_Framer_Next_Image'
import Use_logic_slider from './uselogic_slider'

type Type_WrapperSlider_Props = {
    images_Thumb: Array<string>
}

const slideVariants = {
    hiddenRight: {
        x: '100%',
        opacity: 0,
    },
    hiddenLeft: {
        x: '-100%',
        opacity: 0,
    },
    visible: {
        x: '0',
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
}

function WrapperSlider({ images_Thumb }: Type_WrapperSlider_Props) {
    const {
        currentImg,
        slide_Direction_Animation,
        handle_Click_Button_Left_Slider_Previous,
        handle_Click_Button_Right_Slider_Next,
        handle_Click_Buttons_Dots_Slider,
    } = Use_logic_slider(images_Thumb)

    return (
        <div className="col-start-2 col-end-2 mt-5 flex flex-col gap-5 overflow-hidden">
            <div className="relative flex max-w-full flex-col items-center">
                {/* Img & controls right/left */}
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
                            src={images_Thumb[currentImg]}
                            alt="Meu alt"
                            fill
                            className="object-contain"
                        />
                    </AnimatePresence>
                </div>
                <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between">
                    <Button
                        size="icon"
                        variant="outline"
                        className="bg-slate-400 bg-transparent p-2 hover:bg-slate-500 hover:bg-transparent"
                        onClick={() => {
                            handle_Click_Button_Left_Slider_Previous()
                        }}
                    >
                        <ArrowLeft />
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        className="bg-slate-400 bg-transparent p-2 hover:bg-slate-500 hover:bg-transparent"
                        onClick={() => {
                            handle_Click_Button_Right_Slider_Next()
                        }}
                    >
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <ol className="flex w-full justify-center gap-5">
                {images_Thumb.map((img, index) => (
                    <li key={img}>
                        <Button
                            size="icon"
                            className={cn(
                                'h-5 w-5 rounded-full',
                                index === currentImg
                                    ? 'bg-slate-700'
                                    : 'bg-slate-200'
                            )}
                            onClick={() => {
                                handle_Click_Buttons_Dots_Slider(index)
                            }}
                        />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default WrapperSlider
