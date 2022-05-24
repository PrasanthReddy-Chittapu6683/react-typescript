/**
 * toastPosition Props can be any one of these 
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-bottom" | "right-top"
 */

type HotizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

interface ToastProps {
    toastPosition: Exclude<`${HotizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

const Toast = ({ toastPosition }: ToastProps) => {
    return (
        <div>Toast Notification Position - {toastPosition}</div>
    )
}

export default Toast