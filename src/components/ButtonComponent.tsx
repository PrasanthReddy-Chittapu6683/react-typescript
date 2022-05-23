
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