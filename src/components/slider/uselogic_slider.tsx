import { useCallback, useEffect, useRef, useState } from 'react'

function Use_logic_slider(Images: string[]) {
    const [currentImg, setCurrentImg] = useState(0)
    const slide_Direction_Animation = useRef<'left' | 'right'>('left')
    const limit_Array_Images_Lenght = useRef<number>(Images.length)
    const idTimout = useRef<NodeJS.Timeout | undefined>(undefined)
    const timerTimout = 3500 //3segundo e meio
    //Funções auxiliares Slider.
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

    useEffect(() => {
        if (idTimout.current) clearTimeout(idTimout.current)
        idTimout.current = setTimeout(
            handle_Click_Button_Right_Slider_Next,
            timerTimout
        )

        return () => {
            clearTimeout(idTimout.current)
        }
    }, [currentImg, handle_Click_Button_Right_Slider_Next])

    return {
        currentImg,
        slide_Direction_Animation,
        setCurrentImg,
        handle_Click_Button_Left_Slider_Previous,
        handle_Click_Button_Right_Slider_Next,
        handle_Click_Buttons_Dots_Slider,
    }
}

export default Use_logic_slider
