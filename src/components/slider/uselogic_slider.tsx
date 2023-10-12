import { useRef, useState } from 'react'

function Use_logic_slider(Images: string[]) {
    const [currentImg, setCurrentImg] = useState(0)
    const slide_Direction_Animation = useRef<'left' | 'right'>('left')
    //Funções auxiliares Slider.
    const handle_Click_Button_Left_Slider_Previous = () => {
        setCurrentImg((imgAtual) =>
            imgAtual - 1 < 0 ? Images.length - 1 : imgAtual - 1
        )
        slide_Direction_Animation.current = 'left'
    }

    const handle_Click_Button_Right_Slider_Next = () => {
        setCurrentImg((imgAtual) =>
            imgAtual + 1 === Images.length ? 0 : imgAtual + 1
        )
        slide_Direction_Animation.current = 'right'
    }

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

export default Use_logic_slider
