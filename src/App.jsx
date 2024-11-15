import { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

/* TODO: Add logo here to the photo displayed at the top */
// import TipSize from "./assets/images/TipSize.png"


function App() {
  const [billAmt, setBillAmt] = useState(0);
  const [showBillAmtError, setShowBillAmtError] = useState(false);
  const [peeps, setPeeps] = useState(0);
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(0);

  function handleBillAmtInput(e) {
    const input = e.target.value;
    const pattern = /^[0-9]+\.*$/;
    if(pattern.test(input)) {
      setShowBillAmtError(false)
      setBillAmt(input);
    } else {
      setShowBillAmtError(true)
    }
  }

  function handleSelectedTip(e) {
    console.log(e.target.value);
  }


  return (
    <div className="wrapper">
      {/* <img src={TipSize} alt="Splitter Logo"/> */}
      <div className="container">
        <Form 
          billAmt={billAmt}
          handleBillAmtInput={handleBillAmtInput}
          showBillAmtError={showBillAmtError}
          handleSelectedTip={handleSelectedTip}
        />
        <Display />
      </div>
    </div>
  )
}

export default App