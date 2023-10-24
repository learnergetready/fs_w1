import { useState } from 'react'

const Header = ({heading}) => <h1>{heading}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const StatisticLine = ({statname, stat}) => <p>{statname} {stat}</p>

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <StatisticLine statname="good" stat={good}/>
      <StatisticLine statname="neutral" stat={neutral}/>
      <StatisticLine statname="bad" stat={bad}/>
      <StatisticLine statname="all" stat={good + neutral + bad}/>
      <StatisticLine statname="average" stat={ (good*1 + neutral*0 + bad*(-1)) / ( good + neutral + bad ) }/>
      <StatisticLine statname="positive" stat={100* good / ( good + neutral + bad ) + " %"}/>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App