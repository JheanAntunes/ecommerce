'use client' // Error components must be Client Components

import { TypographyDecoradorH2 } from '@/components/Typography/typography'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Error page-home: ', error)
    }, [error])

    return (
        <div className="flex h-full w-full items-center justify-center">
            <TypographyDecoradorH2>
                Ooops! Alguma coisa deu errado.
            </TypographyDecoradorH2>
            <Button
                className="bg-blue-500 text-slate-50 hover:bg-blue-600"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Tentar novamente.
            </Button>
        </div>
    )
}
