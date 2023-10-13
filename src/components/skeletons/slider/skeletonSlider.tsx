import { Skeleton } from '@/components/ui/skeleton'

const ListSkeletons = [0, 1, 2, 3, 4, 5, 6, 7]

function SkeletonSlider() {
    return (
        <div className="col-start-2 col-end-2 mt-5 flex flex-col gap-5">
            {/* Img & controls Skeleton */}
            <div className="relative">
                <Skeleton className="mx-auto h-52 bg-slate-200 @xs:w-56 @sm:w-56 @md:w-72 @lg:w-80  @2xl:w-[448px] @3xl:w-[512px] @4xl:w-[672px] @5xl:w-[48rem]" />

                <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between">
                    {/* Controls - left  - right */}
                    <Skeleton className="h-10 w-10 rounded-sm bg-slate-200" />
                    <Skeleton className="h-10 w-10 rounded-sm bg-slate-200" />
                </div>
            </div>
            <ol className="flex w-full items-center justify-center gap-5">
                {ListSkeletons.map((valor, index) => (
                    <li key={valor}>
                        <Skeleton className="h-6 w-6 rounded bg-slate-200" />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default SkeletonSlider
