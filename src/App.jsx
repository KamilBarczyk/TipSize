import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  const handleResetBtn = () => {
    setBill("");
    setTip("");
    setPeople("");
    setTotal(0);
    setCalculatedTip(0);
  };

  React.useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      const newCalculatedTip = bill * (tip / 100);
      setCalculatedTip(newCalculatedTip);
      setTotal(bill + newCalculatedTip);
    }
  }, [bill, people, tip]);

  return (
    <div className="wrapper">
      <p className="logo">
        TIP <br /> SIZE
      </p>
      <div className="container">
        <Form
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
          reset={handleResetBtn}
        />
        <Display
          total={total}
          people={people}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  );
}

export default App;
