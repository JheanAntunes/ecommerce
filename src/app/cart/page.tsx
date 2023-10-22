import CartAside from '@/components/cart/aside/cart-aside'
import WrapperCartProduct from '@/components/cart/wrapper-cart-product/wrapper-cart-product'
import Wrapper_H1_Button_Clear_Cart from '@/components/cart/wrapper_h1_button_clear_cart'
import Localidade_Pathname from '@/components/product-dinamico/product-localidade-pathname/localidade_pathname'
import { ChevronRight } from 'lucide-react'

function PageCart() {
    return (
        <section className="col-start-2 col-end-2 mt-5 flex flex-col gap-5">
            <Localidade_Pathname titleProduct="Carrinho">
                <ChevronRight
                    className="text-slate-800"
                    width={20}
                    height={20}
                />
            </Localidade_Pathname>
            <Wrapper_H1_Button_Clear_Cart />
            <div className="grid grid-cols-[1fr_255px] gap-5">
                <WrapperCartProduct />
                <CartAside />
            </div>
        </section>
    )
}

export default PageCart
