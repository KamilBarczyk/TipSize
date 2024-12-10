import React, { useState } from "react";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

const Form = ({ bill, setBill, tip, setTip, people, setPeople }) => {
    const [selectedTip, setSelectedTip] = useState(null);

    const handleSelectedTip = (e) => {
        const { id, value } = e.target;
        setSelectedTip(id);
        setTip(Number(value));
    };

    React.useEffect(() => {
        if (bill === "" && tip === "" && people === "") {
            setSelectedTip(null);
        }
    }, [bill, tip, people]);

    return (
        <div className="form">
            <div className="label-group">
                <div className="label-wrapper">
                    <label className="label" htmlFor="bill">Bill</label>
                </div>
                <div className="number-wrapper">
                <input
                    type="number"
                    className="number-input"
                    id="bill"
                    onKeyDown={(e) => {
                        if (e.key === "-" || e.key === "e") e.preventDefault();
                    }}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === "" || +value >= 0) {
                            setBill(value === "" ? "" : +value);
                        }
                    }}
                    value={bill || ""}
                />
                    <img src={dollar} aria-hidden="true" className="icon" />
                </div>
            </div>

            <div className="tip-section">
                <p className="label">Selected Tip %</p>
                <div className="tip-amount-wrapper">
                    {[5, 10, 15, 25, 50].map((value) => (
                        <div key={value} className="tip-amount">
                            <input
                                type="radio"
                                onChange={handleSelectedTip}
                                id={`input${value}`}
                                className="tip-input"
                                name="tip"
                                value={value}
                                checked={selectedTip === `input${value}`}
                            />
                            <label className="tip-btn" htmlFor={`input${value}`}>{value}%</label>
                        </div>
                    ))}
                    <div className="custom-wrapper">
w                        <input
                            type="number"
                            onKeyDown={(e) => {
                                if (e.key === "-" || e.key === "e") e.preventDefault();
                            }}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value === "" || +value > 0) {
                                    setTip(value === "" ? "" : +value);
                                    setSelectedTip("custom");
                                }
                            }}
                            id="custom"
                            name="tip"
                            className="number-input tip-custom"
                            placeholder="Custom"
                            value={selectedTip === "custom" ? (tip === "" ? "" : tip) : ""}
                        />
                    </div>
                </div>
            </div>

            <div className="label-group">
                <div className={`label-wrapper ${people === 0 ? "error" : ""}`}>
                    <label className="label" htmlFor="people">Number of People</label>
                    <p className="error">{people === 0 ? "Can't be zero" : ""}</p>
                </div>
                <div className="number-wrapper">
                <input
                    type="number"
                    className={`number-input ${people === 0 ? "number-error" : ""}`}
                    id="people"
                    onKeyDown={(e) => {
                        if (e.key === "-" || e.key === "e") e.preventDefault();
                    }}
                    onChange={(e) => {
                        let value = e.target.value;
                        if (value === "0") {
                            setPeople("0");
                        } else if (value && value[0] === "0") {
                            value = value.replace(/^0+/, "");
                            setPeople(value);
                        } else {
                            setPeople(value === "" ? "" : +value);
                        }
                    }}
                    value={people === "" ? "" : people}
                />
                    <img src={person} aria-hidden="true" className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Form;