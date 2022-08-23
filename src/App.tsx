import React from 'react'
import logo from './logo.svg'
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

  return (
    <div>
      <NewComponent students={students} />
      <NewCar car={topCars} />
      <Button />
    </div>
  )
}

export default App
