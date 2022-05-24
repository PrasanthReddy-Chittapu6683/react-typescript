import { useEffect, useRef } from 'react'

const DemoRef = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    /** For Mutable References */
    // const inputRef = useRef<number | null>(null) 

    useEffect(() => {

        inputRef.current?.focus()

    }, [])


    return (
        <input type={'text'} ref={inputRef} />
    )
}

export default DemoRef