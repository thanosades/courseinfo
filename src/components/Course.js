import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (<h1>{course.name}</h1>)
}

const Part = ({ part }) => {
  return (<p>{part.name} {part.exercises}</p>)
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = (props) => {
  const sum = props.parts.reduce((total, current) => {
    return total + current.exercises
  }, 0)

  return (<p> Number of exercises {sum}
  </p>)
}

const Course = ({ course }) => {
  return (
  <div>
    <Header course={course} />
    <Content course={course} />
  </div>
  )
}

export default Course
