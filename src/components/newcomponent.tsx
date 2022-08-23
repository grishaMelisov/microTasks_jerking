type NewComponentPropsType = {
  students: Array<StudentType>
}

type StudentType = {
  id: number
  name: string
  age: number
}

type CarsType = {
  car: Array<CarPropsType>
}

type CarPropsType = {
  manufacturer: string
  model: string
}

export function NewCar(props: CarsType) {
  return (
    <table>
      <tr>
        {props.car.map((item, index) => (
          <td key={index}>{item.manufacturer}</td>
        ))}
      </tr>
      <tr>
        {props.car.map((item, index) => (
          <td key={index}>{item.model}</td>
        ))}
      </tr>
    </table>
  )
}

export function NewComponent(props: NewComponentPropsType) {
  return (
    <ul>
      {props.students.map((item) => (
        <li key={item.id}>{`Студент ${item.name} возраст ${item.age}`}</li>
      ))}
      {/* <li>{props.students[0].name}</li> */}
    </ul>
  )
}
