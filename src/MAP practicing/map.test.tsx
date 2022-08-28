import { PeopleType } from './map'

let people: Array<PeopleType> = [
  { name: 'Andrew Ivanov', age: 33 },
  { name: 'Pavel Smirnov', age: 24 },
  { name: 'Grisha Pizhov', age: 18 },
]

beforeEach(() => {
  people = [
    { name: 'Andrew Ivanov', age: 33 },
    { name: 'Pavel Smirnov', age: 24 },
    { name: 'Grisha Pizhov', age: 18 },
  ]
})

test('should get array of greetings', () => {
  const greet = people.map((item) => `Hello ${item.name.split(' ')[0]}! You are in IT-INCUBATOR`)
  expect(greet.length).toBe(3)
  expect(greet[0]).toBe('Hello Andrew! You are in IT-INCUBATOR')
  expect(greet[1]).toBe('Hello Pavel! You are in IT-INCUBATOR')
  expect(greet[2]).toBe('Hello Grisha! You are in IT-INCUBATOR')
})
