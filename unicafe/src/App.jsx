import { useState } from 'react'

const Header = (props) => <h1>{props.heading}</h1>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>
const Display = (props) => <p>{props.statname} {props.stat}</p>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header heading ="give feedback" />
      <Button handleClick={ () => {setGood(good+1)} } text="good" />
      <Button handleClick={ () => {setNeutral(neutral+1)} } text="neutral" />
      <Button handleClick={ () => {setBad(bad+1)} } text="bad" />

      <Header heading ="statistics" />
      <Display statname="good" stat={good}/>
      <Display statname="neutral" stat={neutral}/>
      <Display statname="bad" stat={bad}/>
      <Display statname="all" stat={good + neutral + bad}/>
      <Display statname="average" stat={ (good*1 + neutral*0 + bad*(-1)) / ( good + neutral + bad ) }/>
      <Display statname="positive" stat={100* good / ( good + neutral + bad ) + " %"}/>
    </div>
  )
}

export default App