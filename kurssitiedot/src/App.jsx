const Header = props => <h1>{props.course}</h1>

const Content = (props) => {
  return (
  <>
    <p>
      {props.part1} {props.e1}
    </p>
  
    <p>
     {props.part2} {props.e2}
    </p>
  
    <p>
      {props.part3} {props.e3}
    </p>
  </>
  )
}

const Totalreturn = props => <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part1={part1} e1={exercises1} part2={part2} e2={exercises2} part3={part3} e3={exercises3} />
      <Totalreturn e1={exercises1} e2={exercises2} e3={exercises3} />
    </>
  )
}

export default App