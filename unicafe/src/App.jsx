import { useState } from 'react'

const Header = (props) => <h1>{props.heading}</h1>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>
const Display = (props) => <p>{props.feedback} {props.amount}</p>

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
      <Display feedback="good" amount={good}/>
      <Display feedback="neutral" amount={neutral}/>
      <Display feedback="bad" amount={bad}/>
    </div>
  )
}

export default App