import React, { useState } from 'react'

import './App.css'
import { NewCar, NewComponent } from './components/newcomponent'
import { Button } from './components/button'
import { Money } from './components/money'
import { FullInput } from './components/FULL INPUT/FullInput'

function App() {
  // const students = [
  //   { id: 1, name: 'James', age: 8 },
  //   { id: 2, name: 'Robert', age: 18 },
  //   { id: 3, name: 'John', age: 28 },
  // ]

  // const topCars = [
  //   { manufacturer: 'BMW', model: 'm5cs' },
  //   { manufacturer: 'Mercedes', model: 'e63s' },
  //   { manufacturer: 'Audi', model: 'rs6' },
  // ]

  // const deleteButtonFoo = (subscriber: string) => {
  //   alert(subscriber)
  // }
  // const addButtonFoo = (subscriber: string) => {
  //   alert(subscriber)
  // }
  // const stupidButtonFoo = () => {
  //   alert("I'm fool!")
  // }
  const [message, setMessage] = useState([
    { message: 'some text' },
    { message: 'some text' },
    { message: 'some text' },
  ])

  const triggerClick = (text: string) => {
    setMessage([...message, { message: text }])
  }

  return (
    <div>
      <FullInput click={triggerClick} />
      {message.map((item) => (
        <div>{item.message}</div>
      ))}
      {/* <NewComponent students={students} />
      <NewCar car={topCars} />
      <Button title={'Delete'} callBack={() => deleteButtonFoo('Deleted')} />
      <Button title={'Add'} callBack={() => addButtonFoo('Added')} />
      <Button title={'Empty Button'} callBack={() => stupidButtonFoo()} />
      <Money /> */}
    </div>
  )
}

export default App
