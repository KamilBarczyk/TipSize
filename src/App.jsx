import React, { useState, useEffect } from "react";
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [bill, setBill] = useState("");
  const[tip, setTip] = useState("")
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.table({bill, people, tip})
    if(bill > 0 && people > 0 && tip > 0){
      setCalculatedTip(bill * (tip / 100));
      setTotal(calculatedTip + bill)
    }
  }, [bill, people, tip, calculatedTip])

  const handleResetBtn = (e) => {
    console.log('reseted')
  }

  return (
    <div className="wrapper">
      <p className="logo">TIP <br/> SIZE</p>
      <div className="container">
        <Form 
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        people={people}
        setPeople={setPeople}
        />
        <Display 
        total={total}
        people={people}
        calculatedTip={calculatedTip}
        handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  )
}

export default App