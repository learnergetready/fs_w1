const Part = props => <p>{props.part} {props.exercise}</p>

const Header = props => <h1>{props.course}</h1>

const Content = props => {
  return (
  <>
    <Part part={props.part1.name} exercise={props.part1.exercises} />
    <Part part={props.part2.name} exercise={props.part2.exercises} />
    <Part part={props.part3.name} exercise={props.part3.exercises} />
  </>
  )
}

const Totalreturn = props => <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Totalreturn part1={part1} part2={part2} part3={part3} />
    </>
  )
}

export default App