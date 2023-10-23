'use client'
import { TypographyDecoradorH2 } from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Banknote, ShoppingBasket } from 'lucide-react'
import useNotShowProduct from '../not-found-product-cart/useNotShowProduct'
import CartAsideDetalhes from './cart-aside-detalhes'

const SHEET_SIDES = ['bottom'] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function CardAsideMobile() {
    if (useNotShowProduct()) return null

    return (
        <div className="sticky inset-x-0 bottom-0 z-30 @4xl:hidden">
            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <div className="flex justify-center rounded border-x p-2 shadow">
                            <Button
                                variant="outline"
                                className="w-80 animate-bounce gap-1 bg-blue-500 text-slate-50 animate-delay-200 animate-duration-1000 animate-infinite animate-ease-linear hover:bg-blue-600"
                            >
                                Resumo / finalizar compra{' '}
                                <ShoppingBasket width={20} height={20} />
                            </Button>
                        </div>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle asChild>
                                <TypographyDecoradorH2 className="font-sans font-medium">
                                    Carrinho
                                </TypographyDecoradorH2>
                            </SheetTitle>
                            <CartAsideDetalhes />
                        </SheetHeader>
                        <SheetFooter className="mt-5 @2xl:mt-0">
                            <SheetClose asChild>
                                <Button
                                    type="button"
                                    className="w-full gap-1 bg-blue-500 text-slate-50 hover:bg-blue-600 @2xl:w-80"
                                >
                                    Pagamento{' '}
                                    <Banknote
                                        className="text-slate-50"
                                        height={20}
                                        width={20}
                                    />
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
