import { Star, StarHalfIcon } from 'lucide-react'
import { Fragment } from 'react'
type Type_RaringStar_props = {
    rating: number
}
function RatingStar({ rating }: Type_RaringStar_props) {
    const ratingStar = (rating: number) => {
        const star = Math.floor(rating)
        let arrayStar: number[] = []
        for (let index = 0; index < star; index++) {
            arrayStar = [...arrayStar, index]
        }
        return arrayStar
    }

    return (
        <>
            {ratingStar(rating).map((star) => (
                <Fragment key={star}>
                    <Star
                        height={20}
                        width={20}
                        className="fill-yellow-500 text-yellow-500"
                    />
                </Fragment>
            ))}
            {!Number.isInteger(rating) && (
                <StarHalfIcon
                    height={20}
                    width={20}
                    className="fill-yellow-500 text-yellow-500"
                />
            )}
        </>
    )
}

export default RatingStar
