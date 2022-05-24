interface RandomNumberType {
    value: number
}

interface PositiveNumberType extends RandomNumberType {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

interface NegativeNumberType extends RandomNumberType {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

interface ZeroNumberType extends RandomNumberType {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps = PositiveNumberType | NegativeNumberType | ZeroNumberType



const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}
            {isZero && 'Zero'}
        </div>
    )
}

export default RandomNumber