import { TypographyDecoradorH1 } from '@/components/Typography/typography'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Categoria_Product from './categoria_product'

function Section_Categoria() {
    return (
        <section className="col-start-2 col-end-2 mt-16 flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <TypographyDecoradorH1>Categorias</TypographyDecoradorH1>
                <Button
                    variant="outline"
                    className="flex items-center gap-2 @xs:px-2 @xs:py-0"
                    asChild
                >
                    <Link href="#">
                        Ver mais <ExternalLink width={15} height={15} />{' '}
                    </Link>
                </Button>
            </div>
            <div className="flex justify-around">
                <Categoria_Product
                    alt="Celular"
                    src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                    href="#"
                    text="Celular"
                />
                <Categoria_Product
                    alt="notebook"
                    src="https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
                    href="#"
                    text="Notebook"
                />
                <Categoria_Product
                    alt="Perfumes"
                    src="https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
                    href="#"
                    text="Perfumes"
                />
            </div>
        </section>
    )
}

export default Section_Categoria
