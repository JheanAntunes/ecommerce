import { Type_Product_Cart } from '@/types/cart'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { slideVariants } from '../framer/slider/slideVariants'
import Product_Detalhes_Like from '../product-dinamico/product-detalhes/product-detalhes-like/product_detalhes_like'
import WrapperProductQtdIncrementDecrement from './cart-product-qtd-increment-decrement.tsx/wrapper-product-qtd-increment-decrement'
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
        <motion.div
            className="relative grid grid-cols-1 gap-5 
            rounded-xl border p-5 shadow @4xl:grid-cols-[2fr_1fr_1fr] @5xl:grid-cols-3"
            variants={slideVariants}
            initial="hiddenLeft"
            animate="visible"
            exit="exit"
        >
            <div className="relative">
                <div className="relative h-44 overflow-hidden @md:h-48 @lg:h-60 @xl:h-64 @2xl:h-72 @4xl:h-40">
                    <Image
                        src={image}
                        alt={description}
                        fill
                        sizes="100vw"
                        className="object-contain"
                    />
                </div>
                <Product_Detalhes_Like
                    id_product={Number(id)}
                    titleProduct={name}
                    image_thumbnail={image}
                    className="absolute left-0 top-0 -translate-x-2 -translate-y-1 rounded-full border bg-white shadow @md:-translate-y-2 @md:translate-x-2 @lg:-translate-y-3 @lg:translate-x-1 @xl:translate-x-1 @2xl:left-8 @2xl:-translate-y-2 @3xl:left-20 @4xl:left-0 @4xl:-translate-x-2 @5xl:-translate-x-3 @5xl:-translate-y-2"
                />
            </div>
            <CartDetalhesProduct
                rating={rating}
                price={price}
                name={name}
                category={category}
                brand={brand}
            />
            <WrapperProductQtdIncrementDecrement
                id={id}
                quantity={quantity}
                name={name}
            />
            <CartProductRemove id={id} name={name} />
        </motion.div>
    )
}

export default Cart_Product_Card
