import { TypographyH1 } from '@/components/Typography/typography'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Categoria_Product from './categoria_product'

function Categoria() {
    return (
        <section className="col-start-2 col-end-2 mt-10 flex flex-col gap-10">
            <div className="flex items-center justify-between">
                <TypographyH1 className='flex items-center gap-2 text-slate-800 before:block before:h-9 before:w-2 before:rounded before:bg-blue-600 before:content-[""]'>
                    Categorias
                </TypographyH1>
                <Button
                    variant="outline"
                    className="flex items-center gap-2"
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
                    src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    href="#"
                    text="Celular"
                />
                <Categoria_Product
                    alt="notebook"
                    src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                    href="#"
                    text="Notebook"
                />
                <Categoria_Product
                    alt="Perfumes"
                    src="https://i.dummyjson.com/data/products/11/thumbnail.jpg"
                    href="#"
                    text="Perfumes"
                />
            </div>
        </section>
    )
}

export default Categoria
