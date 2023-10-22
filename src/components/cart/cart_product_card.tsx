import { Type_Product_Cart } from '@/types/cart'
import Image from 'next/image'
import Product_Detalhes_Like from '../product-dinamico/product-detalhes/product-detalhes-like/product_detalhes_like'
import Cart_Product_Qtd_Increment_Decrement from './cart-product-qtd-increment-decrement.tsx/cart-product-qtd-increment-decrement'
import CartProductRemove from './cart-product-remove/cart-product-remove'
import CartDetalhesProduct from './detalhes-product/cart-detalhes-product'

function Cart_Product_Card({
    image,
    description,
    id,
    name,
    category,
    brand,
    currency,
    discountPercentage,
    price,
    rating,
    stock,
    formattedValue,
    quantity,
    value,
}: Type_Product_Cart) {
    return (
        <div className="relative flex justify-between gap-5 rounded-xl border p-5 shadow">
            <div className="relative h-36 w-full max-w-[266px] overflow-hidden">
                <Image
                    src={image}
                    alt={description}
                    fill
                    sizes="266px"
                    className="object-contain"
                />
                <Product_Detalhes_Like
                    id_product={Number(id)}
                    titleProduct={name}
                    image_thumbnail={image}
                    className="absolute right-0 top-0 -translate-y-2 translate-x-1 rounded-full bg-slate-50 shadow"
                />
            </div>
            <CartDetalhesProduct
                rating={rating}
                price={formattedValue}
                name={name}
                category={category}
                brand={brand}
            />
            <Cart_Product_Qtd_Increment_Decrement
                id={id}
                quantity={quantity}
                name={name}
            />
            <CartProductRemove id={id} name={name} />
        </div>
    )
}

export default Cart_Product_Card
