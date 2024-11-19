import { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  return (
    <div className="wrapper">
      <p className="logo">TIP <br/> SIZE</p>
      <div className="container">
        <Form 
        tip={bill}
        setTip={setBill}
        people={people}
        setPeople={setPeople}
        />
        <Display />
      </div>
    </div>
  )
}

export default App