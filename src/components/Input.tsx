import React from "react";

type InputProps = {
    value: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void

}

const Input = (props: InputProps) => {
    const onChangeLocalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        alert(`Change Local Event - ${event.target.value}`)
    }
    return (
        <>
            <input type={'text'} value={props.value} onChange={props.onChangeHandler} />
            <input type={'text'} value={'Local Event change'} onChange={onChangeLocalHandler} />
        </>
    )
}

export default Input