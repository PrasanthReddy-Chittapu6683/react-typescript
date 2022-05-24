interface CustomInputProps extends React.ComponentProps<'input'> {
    variant: 'primary' | 'secondary',
}

const CustomInput = ({ variant, children, ...rest }: CustomInputProps) => {
    return (
        <input className={`class-with-${variant}`
        } {...rest} />
    )
}

export default CustomInput