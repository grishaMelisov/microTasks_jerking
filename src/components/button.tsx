import { useState } from 'react'
import { text } from 'stream/consumers'

type ButtonPropsType = {
  title: string
  callBack: () => void
}

export function Button(props: ButtonPropsType) {
  const [clicks, setClicks] = useState<number>(0)

  function onClickHandler() {
    props.callBack()
    setClicks(clicks + 1)
  }

  return (
    <div>
      <button onClick={onClickHandler}>
        {props.title}-{clicks}
      </button>
    </div>
  )
}
