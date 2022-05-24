type CustomButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const CustomButton = ({ variant, children, ...rest }: CustomButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}

export default CustomButton