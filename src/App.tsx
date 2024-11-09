import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

/* TODO: Add logo here to the photo displayed at the top */
// import TipSize from "./assets/images/TipSize.png"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      {/* <img src={TipSize} alt="Splitter Logo"/> */}
      <div className="container">
        <Form />
        <Display />
      </div>
    </div>
  )
}

export default App