import { data_Image_Description } from '@/utils/imgs_teste_slider/Images_Teste'
import { act, render, renderHook, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import useLogicSlider from '../uselogicslider'
import WrapperSlider from '../wrapperSlider'
import useLogicSliderTestNotTimout from './uselogicsliderTestNotTimout'

describe('WrapperSlider', () => {
    it('should correctly render slider components', () => {
        render(<WrapperSlider dataImageDescription={data_Image_Description} />)

        const Button_Slider_Left_Previous = screen.getByRole('button', {
            name: /clique para pular para a imagem que está no lado esquerdo do carrossel\./i,
        })

        const Button_Slider_Right_Next = screen.getByRole('button', {
            name: /clique para pular para a imagem que está no lado direito do carrossel\./i,
        })

        const imagens_Slider = screen.getByRole('img', { name: /Teste0/i })
        const List_Dot_Slider = screen.getByRole('list')
        expect(Button_Slider_Left_Previous).toBeVisible()
        expect(Button_Slider_Right_Next).toBeVisible()
        expect(List_Dot_Slider).toBeVisible()
        expect(imagens_Slider).toBeInTheDocument()
    })

    it('should correctly render hooks values', () => {
        const utils = renderHook(() => useLogicSlider(data_Image_Description))

        const { currentImg, slide_Direction_Animation } = utils.result.current

        expect(currentImg).toBe(0)
        expect(slide_Direction_Animation.current).toBe('left')
    })

    it('User simulation when clicking button, left', () => {
        const utils = renderHook(() =>
            useLogicSliderTestNotTimout(data_Image_Description)
        )

        const { handle_Click_Button_Left_Slider_Previous } =
            utils.result.current

        act(() => {
            handle_Click_Button_Left_Slider_Previous()
        })

        expect(utils.result.current.currentImg).toBe(2)
        expect(utils.result.current.slide_Direction_Animation.current).toBe(
            'left'
        )
    })

    it('User simulation when clicking button, right', () => {
        const utils = renderHook(() =>
            useLogicSliderTestNotTimout(data_Image_Description)
        )

        const { handle_Click_Button_Right_Slider_Next } = utils.result.current

        act(() => {
            handle_Click_Button_Right_Slider_Next()
        })

        expect(utils.result.current.currentImg).toBe(1)
        expect(utils.result.current.slide_Direction_Animation.current).toBe(
            'right'
        )
    })

    it('User simulation when clicking buttons , dot increment', () => {
        const utils = renderHook(() =>
            useLogicSliderTestNotTimout(data_Image_Description)
        )

        const { handle_Click_Buttons_Dots_Slider } = utils.result.current

        act(() => {
            handle_Click_Buttons_Dots_Slider(2)
        })

        expect(utils.result.current.currentImg).toBe(2)
        expect(utils.result.current.slide_Direction_Animation.current).toBe(
            'right'
        )
    })

    it('User simulation when clicking buttons, dot descrement', () => {
        const utils = renderHook(() =>
            useLogicSliderTestNotTimout(data_Image_Description)
        )

        const { handle_Click_Buttons_Dots_Slider } = utils.result.current

        act(() => {
            handle_Click_Buttons_Dots_Slider(0)
        })

        expect(utils.result.current.currentImg).toBe(0)
        expect(utils.result.current.slide_Direction_Animation.current).toBe(
            'left'
        )
    })

    it('User simulation when clicking button interface, left', async () => {
        render(<WrapperSlider dataImageDescription={data_Image_Description} />)

        const Button_Slider_Left_Previous = screen.getByRole('button', {
            name: /clique para pular para a imagem que está no lado esquerdo do carrossel\./i,
        })

        const image_Slider = screen.getByRole('img', { name: /teste0/i })
        expect(image_Slider).toBeInTheDocument()

        await act(async () => {
            return await userEvent.click(Button_Slider_Left_Previous)
        })

        const image_Slider_2 = screen.getByRole('img', { name: /teste2/i })
        expect(image_Slider_2).toBeInTheDocument()
    })

    it('User simulation when clicking button interface, right', async () => {
        render(<WrapperSlider dataImageDescription={data_Image_Description} />)

        const Button_Slider_Right_Next = screen.getByRole('button', {
            name: /clique para pular para a imagem que está no lado direito do carrossel\./i,
        })

        const image_Slider = screen.getByRole('img', { name: /teste0/i })
        expect(image_Slider).toBeInTheDocument()

        await act(async () => {
            return await userEvent.click(Button_Slider_Right_Next)
        })

        const image_Slider_1 = screen.getByRole('img', { name: /teste1/i })
        expect(image_Slider_1).toBeInTheDocument()
    })
})
