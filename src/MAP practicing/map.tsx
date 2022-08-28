export type PeopleType = {
  name: string
  age: number
}

const people: Array<PeopleType> = [
  { name: 'Andrew Ivanov', age: 33 },
  { name: 'Pavel Smirnov', age: 24 },
  { name: 'Grisha Pizhov', age: 18 },
]

const devs = people.map((item) => {
  return {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: item.name.split(' ')[0],
    lastName: item.name.split(' ')[1],
  }
})

const greet = people.map((item) => `Hello ${item.name.split(' ')[0]}! You are in IT-INCUBATOR`)

console.log(greet)
console.log(devs)
