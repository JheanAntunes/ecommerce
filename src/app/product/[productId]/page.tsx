import {
    TypographyH1,
    TypographyH2,
    TypographySmall,
} from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { ChevronRight, ShoppingCart, Truck } from 'lucide-react'

async function PageProductDynamic() {
    return (
        <section className="col-start-2 col-end-2">
            <div className="flex items-center gap-5">
                {/* localização em que page usuario está atualmente. */}
                <TypographySmall>E-commerce</TypographySmall>
                <ChevronRight />
                <TypographySmall>Produtos</TypographySmall>
                <ChevronRight />
                <TypographySmall>TitleProduct</TypographySmall>
            </div>
            <div>
                <div>
                    <div>{/* Images dots circles */}</div>
                    <div>{/* Image */}</div>
                </div>
                <div>
                    <TypographyH1>Title Product</TypographyH1>
                    <span>Price</span>
                    <div>{/* qualidades */}</div>
                    <p>Description</p>
                    <Button>
                        Comprar produto <Truck />{' '}
                    </Button>
                    <Button>
                        Adicionar no <ShoppingCart />{' '}
                    </Button>
                </div>
            </div>
            <div>
                <TypographyH2>Quantidade</TypographyH2>
                <Button> + </Button>
                <Button> - </Button>
            </div>
        </section>
    )
}

export default PageProductDynamic
