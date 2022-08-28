import { useState } from 'react'
import { isTypeNode } from 'typescript'

export function Money() {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  function onlyRubles() {
    setMoney(money.filter((item) => item.banknots === 'RUBLS'))
  }

  return (
    <ul>
      {money.map((item, id) => {
        return (
          <li key={id}>
            <span>{item.banknots} </span>
            <span>{item.value} </span>
            <span>{item.number}</span>
          </li>
        )
      })}
      <button onClick={() => onlyRubles()}>РУБЛИ ЕПТА</button>
    </ul>
  )
}
