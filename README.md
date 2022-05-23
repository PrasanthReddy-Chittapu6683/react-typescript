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