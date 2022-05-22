# Why Typescript with React?

-   With static type checking, you get to learn about protential bugs as you are typing the code, than heading to the browser and figuring out at run time.
-   Provides a way to describe the shape of an object hence providing better documentation and autocomplete.
-   Easy for maintenance and refactoring of large code bases.


##  Prop Types

### string, number, boolean propTypes
-   TypingProps1.tsx:
 ```javascript
    type TypingProps1Props = {
        name: string;
        messageCount?: number;
        isLoggedIn: boolean
    }

    const TypingProps1 = (props: TypingProps1Props) => {

        return (
            <div>
            {
                props.isLoggedIn ? `Welcome ${props.name}! Your message count is ${props.messageCount}`
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