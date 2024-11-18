import { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  return (
    <div className="wrapper">
      <p className="logo">TIP <br/> SIZE</p>
      <div className="container">
        <Form />
        <Display />
      </div>
    </div>
  )
}

export default App