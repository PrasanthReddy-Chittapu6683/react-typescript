import { useReducer } from 'react'

const initialState = { count: 0 }

type CounterStateProps = {
    count: number
}


type updateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type resetAction = {
    type: 'reset'
}

type CounterActionProps = updateAction | resetAction


function reducer(state: CounterStateProps, action: CounterActionProps) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state;
    }

}


export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>Count : {state?.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}> Increment by 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}> Decrement by 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}> Reset</button>
        </div>
    )
}
