import React, { useState } from 'react'

import './App.css'
import { NewCar, NewComponent } from './components/newcomponent'
import { Button } from './components/button'

function App() {
  const students = [
    { id: 1, name: 'James', age: 8 },
    { id: 2, name: 'Robert', age: 18 },
    { id: 3, name: 'John', age: 28 },
  ]

  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ]

  const deleteButtonFoo = (subscriber: string) => {
    alert(subscriber)
  }
  const addButtonFoo = (subscriber: string) => {
    alert(subscriber)
  }
  const stupidButtonFoo = () => {
    alert("I'm fool!")
  }

  return (
    <div>
      <NewComponent students={students} />
      <NewCar car={topCars} />
      <Button title={'Delete'} callBack={() => deleteButtonFoo('Deleted')} />
      <Button title={'Add'} callBack={() => addButtonFoo('Added')} />
      <Button title={'Empty Button'} callBack={() => stupidButtonFoo()} />
    </div>
  )
}

export default App
