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