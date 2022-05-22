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