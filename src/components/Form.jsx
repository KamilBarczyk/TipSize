import React, { useState } from "react";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

const Form = ({ bill, setBill, tip, setTip, people, setPeople, reset }) => {
    const [selectedTip, setSelectedTip] = useState(null);

    const handleSelectedTip = (e) => {
        const { id, value } = e.target;
        setSelectedTip(id);
        setTip(+value);
    };

    const handleReset = () => {
        setBill("");
        setTip("");
        setPeople("");
        setSelectedTip(null);
        reset();
    };

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
                        onInput={(e) => setBill(+e.target.value)}
                        value={bill}
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
                        <input
                            type="number"
                            onChange={(e) => {
                                setTip(+e.target.value);
                                setSelectedTip("custom");
                            }}
                            id="custom"
                            name="tip"
                            className="number-input tip-custom"
                            placeholder="Custom"
                            value={selectedTip === "custom" ? tip : ""}
                        />
                        <label htmlFor="custom" className="tip-custom-label">Custom</label>
                    </div>
                </div>
            </div>

            <div className="label-group">
                <div className="label-wrapper">
                    <label className="label" htmlFor="people">Number of People</label>
                    <p className="error">{people === 0 ? "Can't be zero" : ""}</p>
                </div>
                <div className="number-wrapper">
                    <input
                        type="number"
                        className={`number-input ${people === 0 ? "number-error" : ""}`}
                        id="people"
                        onInput={(e) => setPeople(+e.target.value)}
                        value={people}
                    />
                    <img src={person} aria-hidden="true" className="icon" />
                </div>
            </div>
        </div>
    );
};

export default Form;