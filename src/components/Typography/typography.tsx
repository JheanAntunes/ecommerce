import { cn } from '@/lib/utils'

type Type_Typography = React.ComponentProps<'h1'>

export function TypographyH1({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h1
            className={cn(
                `font-poppins scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}

export function TypographyDecoradorH1({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h1
            className={cn(
                `font-poppins flex items-center gap-2 text-3xl font-medium leading-none  text-slate-800 before:block before:h-7 before:w-2 before:rounded before:bg-blue-600 before:content-[""] @5xl:text-4xl @5xl:before:h-8`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}

export function TypographyDecoradorH2({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h2
            className={cn(
                `font-poppins flex scroll-m-20 items-center gap-2 text-3xl font-medium leading-none text-slate-800 transition-colors before:block before:h-7 before:w-2 before:rounded before:bg-blue-600 before:content-[""] first:mt-0 @2xl:border-b @2xl:pb-2 @5xl:text-4xl @5xl:before:h-8`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h2>
    )
}

export function TypographyH2({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h2
            className={cn(
                `font-poppins scroll-m-20 border-b pb-2 text-3xl font-medium transition-colors first:mt-0`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h2>
    )
}

export function TypographyH3({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h3
            className={cn(
                `font-poppins scroll-m-20 text-2xl font-medium tracking-tight`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
}

export function TypographyDecoradorH3({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h3
            className={cn(
                `font-poppins flex items-center gap-2 text-2xl font-medium leading-none  text-slate-800 before:block before:h-7 before:w-2 before:rounded before:bg-blue-600 before:content-[""] @5xl:text-4xl @5xl:before:h-8`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
}

export function TypographyH4({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h4
            className={cn(
                `font-poppins scroll-m-20 text-xl font-semibold tracking-tight`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h4>
    )
}

export function TypographyDecoradorH4({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <h4
            className={cn(
                `font-poppins flex scroll-m-20 items-center gap-2 text-base font-medium tracking-tight before:block before:h-4 before:w-2 before:rounded before:bg-blue-600 before:content-[""]`,
                {},
                className
            )}
            {...props}
        >
            {children}
        </h4>
    )
}

export function TypographyP({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <p className={cn('leading-6', {}, className)} {...props}>
            {children}
        </p>
    )
}

export function TypographySmall({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <small
            className={cn(
                'text-sm font-normal leading-none text-slate-600',
                {},
                className
            )}
            {...props}
        >
            {children}
        </small>
    )
}

export function TypographyMuted({
    className,
    children,
    ...props
}: Type_Typography) {
    return (
        <p
            className={cn('text-sm text-muted-foreground', {}, className)}
            {...props}
        >
            {children}
        </p>
    )
}
