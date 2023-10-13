import { useCallback, useRef, useState } from 'react'
import { Type_Data_Image_Description } from '../Type_data_Image_Description'

function useLogicSliderTestNotTimout(Images: Type_Data_Image_Description[]) {
    const [currentImg, setCurrentImg] = useState(0)
    const slide_Direction_Animation = useRef<'left' | 'right'>('left')
    const limit_Array_Images_Lenght = useRef<number>(Images.length)

    // //Funções auxiliares Slider.
    const handle_Click_Button_Left_Slider_Previous = () => {
        setCurrentImg((imgAtual) =>
            imgAtual - 1 < 0
                ? limit_Array_Images_Lenght.current - 1
                : imgAtual - 1
        )
        slide_Direction_Animation.current = 'left'
    }

    const handle_Click_Button_Right_Slider_Next = useCallback(() => {
        setCurrentImg((imgAtual) =>
            imgAtual + 1 === limit_Array_Images_Lenght.current
                ? 0
                : imgAtual + 1
        )
        slide_Direction_Animation.current = 'right'
    }, [])

    const handle_Click_Buttons_Dots_Slider = (dot: number) => {
        setCurrentImg(dot)
        slide_Direction_Animation.current = dot > currentImg ? 'right' : 'left'
    }

    return {
        currentImg,
        slide_Direction_Animation,
        setCurrentImg,
        handle_Click_Button_Left_Slider_Previous,
        handle_Click_Button_Right_Slider_Next,
        handle_Click_Buttons_Dots_Slider,
    }
}

export default useLogicSliderTestNotTimout
