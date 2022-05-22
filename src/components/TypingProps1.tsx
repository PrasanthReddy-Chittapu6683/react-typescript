

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