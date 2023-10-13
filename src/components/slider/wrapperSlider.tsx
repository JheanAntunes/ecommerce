'use client'
import Button_Slider_Left_Previous from './Button_Slider_Left_Previous'
import Button_Slider_Right_Next from './Button_Slider_Right_Next'
import Dot_Slider from './Dot_Slider'
import { Type_Data_Image_Description } from './Type_data_Image_Description'
import useLogicSlider from './uselogicslider'
import Wrapper_Image_Slider from './wrapper_Image_Slider'

type Type_WrapperSlider_Props = {
    dataImageDescription: Type_Data_Image_Description[]
}

function WrapperSlider({ dataImageDescription }: Type_WrapperSlider_Props) {
    const {
        currentImg,
        slide_Direction_Animation,
        handle_Click_Button_Left_Slider_Previous,
        handle_Click_Button_Right_Slider_Next,
        handle_Click_Buttons_Dots_Slider,
    } = useLogicSlider(dataImageDescription)

    return (
        <div className="col-start-2 col-end-2 mt-5 flex flex-col gap-5 overflow-hidden">
            <div className="relative flex max-w-full flex-col items-center">
                {/* Img & controls right/left */}
                <Wrapper_Image_Slider
                    currentImg={currentImg}
                    images_Thumb={dataImageDescription}
                    slide_Direction_Animation={slide_Direction_Animation}
                />
                <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between">
                    <Button_Slider_Left_Previous
                        onClick={(event) => {
                            handle_Click_Button_Left_Slider_Previous()
                        }}
                    />
                    <Button_Slider_Right_Next
                        onClick={(event) => {
                            handle_Click_Button_Right_Slider_Next()
                        }}
                    />
                </div>
            </div>
            <ol className="flex w-full justify-center gap-5">
                {dataImageDescription.map(({ image_thumbnail }, index) => (
                    <Dot_Slider
                        key={image_thumbnail}
                        currentImg={currentImg}
                        index={index}
                        onClick={() => {
                            handle_Click_Buttons_Dots_Slider(index)
                        }}
                    />
                ))}
            </ol>
        </div>
    )
}

export default WrapperSlider
