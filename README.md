# Why Typescript with React?

-   With static type checking, you get to learn about protential bugs as you are typing the code, than heading to the browser and figuring out at run time.
-   Provides a way to describe the shape of an object hence providing better documentation and autocomplete.
-   Easy for maintenance and refactoring of large code bases.


##  Prop Types

### string, number, boolean propTypes

`messageCount?: number; Here ? is used to make this Prop as optional`
-   TypingProps1.tsx:
 ```javascript
    type TypingProps1Props = {
        name: string;
        messageCount?: number;
        isLoggedIn: boolean
    }

    const TypingProps1 = (props: TypingProps1Props) => {
        const { messageCount = 0 } = props;
        return (
            <div>
            {
                props.isLoggedIn ? `Welcome ${props.name}! Your message count is ${messageCount}`
                : `Welcome Guest`
            }

            </div>
        )
    }
    export default TypingProps1
```

-   App.tsx:
  ```javascript
    function App() {
        return (
            <div className="App">
                <TypingProps1 isLoggedIn={true} name='Prasanth' messageCount={10}></TypingProps1>
            </div>
        );
    }

  ```

### Object propTypes

  ```javascript
    type PersonPropTpes = {
        personObject: {
            fName: string,
            lName: string
        }
    }
    const Person = (props: PersonPropTpes) => {
        return (
            <div>Person Detais: {props.personObject.fName} {props.personObject.lName}</div>
        )
    }

    export default Person

```
-   App.tsx:
  ```javascript
    const personNameDetails = {
        fName: 'Prasanth',
        lName: 'CV'
    }
    <Person personObject={personNameDetails}></Person>
```
### Array propTypes

  ```javascript
    type PersonListPropTypes = {
        names: {
            fName: string,
            lName: string
        }[]
    }
    const PersonList = (props: PersonListPropTypes) => {
        return (
            <div>PersonList:
                {props.names.map((name) => {
                    return (
                        <h2>
                            {name.fName} - {name.lName}
                        </h2>
                    )
                })}
            </div>
        )
    }

    export default PersonList
```
-   App.tsx:
  ```javascript
    const nameList = [
        {
        fName: 'Prasanth',
        lName: 'CV'
        },
        {
        fName: 'John',
        lName: 'D'
        },
        {
        fName: 'Clark',
        lName: 'Kent'
        }
    ]
     <PersonList names={nameList}></PersonList>
```

### PropTypes: Union of String literals

```javascript
    type StatusProps = {
        status: 'loading' | 'success' | 'error'
    }

    const Status = (props: StatusProps) => {
        let message
        if (props.status === 'loading')
            message = 'Loading...'
        else if (props.status === 'success')
            message = 'Success !!!'
        else if (props.status === 'error')
            message = '<<< Error >>>'
        return (
            <div>Status - {message}</div>
        )
    }


    export default Status
```

-   App.tsx:

```javascript
    <Status status='loading'></Status>
```


### PropTypes: Children Prop's pass to a React Component 
```javascript
    type HeadingProps = {
        children: string;
    }
    const Heading = (props: HeadingProps) => {
        return (
            <div>{props.children}</div>
        )
    }

    export default Heading
```
-   App.tsx:

```javascript
    <Heading>
        Placeholder tp pass childer as a Props
    </Heading>
```

### PropTypes: Pass React Component as Prop's 

`React.ReactNode is used to define the Props for React Components`

```javascript
    type OscarProps = {
        children: React.ReactNode
    }

    const Oscar = (props: OscarProps) => {
        return (
            <div>{props.children}</div>
        )
    }

    export default Oscar
```

-   App.tsx:

```javascript
    <Oscar>
        <Heading>
            Passing Header Component as Props
        </Heading>
    </Oscar>
```


### Event Props: Pass Events as Props


`void is used here when function doesnt have any retun`


```javascript
    type ButtonProps = {
    handleButtonClick: () => void // void is used here when function doesnt have any retun
    }
    const ButtonComponent = (props: ButtonProps) => {
    return (
        <button onClick={props.handleButtonClick}>Button</button>
    )
    }

    export default ButtonComponent
```
-   App.tsx:

```javascript
    <ButtonComponent handleButtonClick={() => {
        alert('Button Clicked')
      }} />
```

### Another type of Event handler is when click event want to pass an event 

``` javascript
    type ButtonComponentProps = {
    handleButtonClick: () => void // void is used here when function doesnt have any retun
    handleButtonEventClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    }
    const ButtonComponent = (props: ButtonComponentProps) => {
    return (
        <>
        <button onClick={props.handleButtonClick}>Button</button>
        <button onClick={(eve) => props.handleButtonEventClick(eve, 1)}>Event-Button</button>
        </>
    )
    }

    export default ButtonComponent
```

-   App.tsx:

```javascript
    <ButtonComponent handleButtonEventClick={(event, id) => {
        alert(`Event Button clicked ${event} - ID - ${id}`)
      }} handleButtonClick={() => {
        alert('Button Clicked')
      }} />
```

### Event handler for Input textbox

```javascript
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
```

-   App.tsx

```javascript
    <Input value='Text' onChangeHandler={(event) => {
        alert(`Change Event - ${event.target.value}`)
      }} />
```


## Style Props

```javascript
    type ContainerProps = {
    styles: React.CSSProperties
    };

    export const Container = (props: ContainerProps) => {
    return <div style={props.styles}>container</div>;
    };
```
-   App.tsx

```javascript
    <Container styles={{ border: '1px solid red', padding: '1rem', backgroundColor: 'red' }} />
```

# useState Hook
## Simple `useState`

```javascript
    import { useState } from 'react'

    const LoggedIn = () => {
        const [isLoggedIn, setIsLoggedIn] = useState(false)
        const handleLoggedIn = () => {
            setIsLoggedIn(true)
        }
        const handleLoggedout = () => {
            setIsLoggedIn(false)
        }

        return (
            <div>
                <button onClick={handleLoggedIn}>Login</button>
                <button onClick={handleLoggedout}>Logout</button>
                <div>User is {isLoggedIn ? 'Loggedin' : 'Logout'}</div>
            </div>
        )
    }

    export default LoggedIn
```

## Future Values in `useState`

<b>`NOTE: const [user, setUser] = useState<null | AuthUser>(null)` </b>


```javascript
    import { useState } from 'react'

    type AuthUser = {
        name?: string
        email?: string
    }


    const User = ({ name, email }: AuthUser) => {

        const [user, setUser] = useState<null | AuthUser>(null)
        const handleLoggedIn = () => {
            setUser({
                name: 'Prasanth',
                email: 'prasanthreddy.chittapu@gmail.com'
            })
        }
        const handleLoggedout = () => {
            setUser(null)
        }

        return (
            <div>
                <button onClick={handleLoggedIn}>Login</button>
                <button onClick={handleLoggedout}>Logout</button>
                <div>User name is {user?.name}</div>
                <div>User email is {user?.email}</div>
            </div>
        )
    }

    export default User
```

## Type Assertion in `useState`

<b>`NOTE: const [user, setUser] = useState< AuthUser>({} as AuthUser)` </b>

```javascript

    import { useState } from 'react'

    type AuthUser = {
        name?: string
        email?: string
    }


    const User = ({ name, email }: AuthUser) => {

        const [user, setUser] = useState< AuthUser>({} as AuthUser)
        const handleLoggedIn = () => {
            setUser({
                name: 'Prasanth',
                email: 'prasanthreddy.chittapu@gmail.com'
            })
        }

        return (
            <div>
                <button onClick={handleLoggedIn}>Login</button>
                <div>User name is {user.name}</div>
                <div>User email is {user.email}</div>
            </div>
        )
    }

    export default User

```

# useReducer Hook

-   `function reducer(state: CounterStateProps, action: CounterActionProps) {`
-   `const [state, dispatch] = useReducer(reducer, initialState)`
-   `<button onClick={() => dispatch({ type: 'increment', payload: 10 })}> Increment by 10</button>`

```javascript

    import { useReducer } from 'react'

    const initialState = { count: 0 }

    type CounterStateProps = {
        count: number
    }

    type CounterActionProps = {
        type: string
        payload: number
    }

    function reducer(state: CounterStateProps, action: CounterActionProps) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + action.payload }
            case 'decrement':
                return { count: state.count - action.payload }
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
            </div>
        )
    }
```

## `useReducer` Strict Action Types  

-   Some times action type doesnot required payload in case of `reset` action type. So to achive this we can use  `Strict Action Types`

```javascript
    type updateAction = {
        type: 'increment' | 'decrement'
        payload: number
    }

    type resetAction = {
        type: 'reset'
    }
    type CounterActionProps = updateAction | resetAction
```
 

```javascript
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


```

# useContext Hook


-   STEP-1 : `ThemeContext.tsx`
```javascript
    import { createContext } from "react";
    import { theme } from "./theme";

    type ThemeContextProviderProps = {
        children: React.ReactNode
    }

    export const ThemeContext = createContext(theme)

    export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
        return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    }
```
-   STEP-2 : `theme.ts`
```javascript
    export const theme = {
        primary: {
            main: '#3f51b5',
            text: '#fff'
        },
        secondary: {
            main: '#f50057',
            text: '#fff'
        }
    }
```

-   STEP-3 : `Box.tsx`
```javascript
    import { useContext } from 'react'
    import { ThemeContext } from './ThemeContext'

    const Box = () => {
        const theme = useContext(ThemeContext);
        return (
            <>
                <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Here is the Primary Theme Context</div>
                <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>Here is the Secondary Theme Context</div>
            </>)
    }

    export default Box
```

-   STEP-4 : `App.tsx`
```javascript
    <ThemeContextProvider>
        <Box />
    </ThemeContextProvider>
```

### `useContext` with Future Value

-   STEP-1 : `UserContext.tsx`
```javascript
    import { useState, createContext } from 'react'

    export type AuthUser = {
        name: string
        email: string
    }

    type UserContextType = {
        user: AuthUser | null
        setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
    }
    type UserContextProviderProps = {
        children: React.ReactNode
    }

    export const UserContext = createContext<UserContextType | null>(null)

    export const UserContextProvider = ({ children }: UserContextProviderProps) => {
        const [user, setUser] = useState<AuthUser | null>(null)
        return <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    }
```

-   STEP-2 : `UserDetails.tsx`
```javascript
    import { useContext } from 'react';
    import { UserContext } from './UserContext'

    const UserDetails = () => {
        const userContext = useContext(UserContext)
        const handleLoggedIn = () => {
            if (userContext) {
                userContext.setUser({
                    name: 'Prasanth',
                    email: 'prasanthreddy.chittapu@gmail.com'
                })
            }
        }
        const handleLoggedout = () => {
            if (userContext) {
                userContext.setUser(null)
            }
        }

        return (
            <div>
                <button onClick={handleLoggedIn}>Login</button>
                <button onClick={handleLoggedout}>Logout</button>
                <div>User name is {userContext?.user?.name} </div>
                <div>User email is {userContext?.user?.email}  </div>
            </div>
        )
    }
    export default UserDetails
```

-   STEP-2 : `App.tsx`
```javascript
    <UserContextProvider>
        <UserDetails />
    </UserContextProvider>
```



# useRef

```javascript
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
```


# Generic Prop Type

```javascript
type ListPorps<T> = {
    items: T[]
    onClick: (value: T) => void
}
const List = <T extends { id: number, value: string }>({ items, onClick }: ListPorps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.value}
                    </div>
                )
            })}
        </div>
    )
}

export default List
```

-   App.tsx:
  
```javascript
    <List items={[{ id: 1, value: 'Thor' }, { id: 2, value: 'Iron Man' }, { id: 3, value: 'Wonder Women' }]} onClick={(item) => alert(item)} />
```

# Restricting Prop Type

-   `never` is used to to restrict the property for assignment
-   In the below example we can able to pass only 1 prop at a time `(isPositive / isNegative / isZero)`, so to restrict this we are going to use the `never` type


```javascript
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
```

```javascript
    <RandomNumber value={10} isZero></RandomNumber>
    {/* Throws error :: 
      <RandomNumber value={10} isPositive isZero></RandomNumber>
      <RandomNumber value={10} isNegative isZero></RandomNumber> 
    */}

```

# Template Literals & EXCLUDE keyword

- To have template literals use 
    -   <b>toastPosition: `${HotizontalPosition}-${VerticalPosition} `</b>
- Suppose if we want to exclude few from the list we need to use `EXCLUDE` keyword
  - <b>toastPosition: Exclude<`${HotizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'</b>
  
```javascript
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

```

```javascript
 <Toast toastPosition='center' /> // Valid
 <Toast toastPosition='left-center' /> // Valid
 <Toast toastPosition='left' /> // Not Valid: Throws error because only 'left' will not accepthere
```


# Wrapping HTML Element

- `children` prop is by default derived from React.ComponentProps and type is `React Node`. Now if we want to restrict or `Omit` the specificly to make the props to any specific type like `string / number / bool etc...` use `Omit` keyword

```javascript
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
```

```javascript
    /** THROWS ERROR:: children props  cannot be a Node , it will accept only `string`   */
    <CustomButton variant='primary' onClick={() => alert('Clicked !!!')}>
        <div> Primary Button Text </div> 
    </CustomButton>
    /** Works fine*/
    <CustomButton variant='primary' onClick={() => alert('Clicked !!!')}>
        Primary Button Text  
    </CustomButton>
```


```javascript
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

```
```javascript
   <CustomInput variant='secondary' />
```

# Extracting a Components Prop Types

-   If we want to access the different component prop types we can make use of `React.ComponentProps` to extract the proptypes from other component

```javascript
    type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean
    }

    const Greet = (props: GreetProps) => {

    return (
        <div>
        {
            props.isLoggedIn ? `Welcome ${props.name}! Your message count is ${props.messageCount}`
            : `Welcome Guest`
        }

        </div>
    )
    }

    export default Greet

```

-   NOTE:  `props: React.ComponentProps<typeof Greet>`
```javascript
    import React from 'react'
    import Greet from '../Greet'
    export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
        return (
            <div>
                {props.name}
                {props.messageCount}
                {props.isLoggedIn}
            </div>
        )
    }

```


# Polymorphic Components

```javascript
    import React from 'react'

    type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'lg' | 'md'
    color?: 'primary' | 'secondary'
    children: React.ReactNode,
    as?: E
    }

    type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

    const Text = <E extends React.ElementType = 'div'>({
    size,
    color,
    children,
    as
    }: TextProps<E>) => {
    const Component = as || 'div'
    return (
        <Component className={`class-with${size}-${color}`}>{children}</Component>
    )
    }

    export default Text

```

```javascript
    <Text as={'h1'} size={'lg'} color={'primary'}>  Heading</Text>
    <Text as={'p'} size={'md'} color={'primary'}> Paragraph </Text>
    <Text as={'label'} htmlFor='example' color={'primary'} size={'sm'}>Label</Text>
```