import { TypographyDecoradorH1 } from '@/components/Typography/typography'

function loading() {
    return (
        <div className="col-start-2 col-end-2 flex items-center justify-center">
            <TypographyDecoradorH1>
                Carregando a página, por favor, espere...
            </TypographyDecoradorH1>
        </div>
    )
}

export default loading
