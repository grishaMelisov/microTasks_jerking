import { ChangeEvent, useState } from 'react'

type FullInputPropsType = {
  click: (text: string) => void
}

export function FullInput(props: FullInputPropsType) {
  const [addedMessage, setAddedMessage] = useState('')

  const inputHandler = (value: ChangeEvent<HTMLInputElement>) => {
    setAddedMessage(value.currentTarget.value)
  }

  const buttonHandler = () => {
    props.click(addedMessage)
  }

  return (
    <div>
      <input onChange={inputHandler} placeholder={'type smth'} />
      <button onClick={buttonHandler}>Add</button>
    </div>
  )
}
