import React, { useState, useEffect } from "react";
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  const reset = () => {
      setBill("");
      setTip("");
      setPeople("");
      setCalculatedTip(0);
      setTotal(0);
  };

  useEffect(() => {
      if (bill > 0 && people > 0 && tip > 0) {
          setCalculatedTip(bill * (tip / 100));
          setTotal(bill + calculatedTip);
      }
  }, [bill, people, tip, calculatedTip]);

  return (
      <div className="wrapper">
          <p className="logo">TIP <br /> SIZE</p>
          <div className="container">
              <Form
                  bill={bill}
                  setBill={setBill}
                  tip={tip}
                  setTip={setTip}
                  people={people}
                  setPeople={setPeople}
                  reset={reset}
              />
              <Display
                  total={total}
                  people={people}
                  calculatedTip={calculatedTip}
                  handleResetBtn={reset}
              />
          </div>
      </div>
  );
}

export default App;