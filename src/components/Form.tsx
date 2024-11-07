import dollar from "../assets/images/icon-dollar.svg"
import person from "../assets/images/icon-person.svg"

const Form = () => {
    return (
        <div className="form">
            <div className="label-group">
                <label htmlFor="bill">Bill</label>
                <input type="number" id="bill" />
                <img src={dollar} aria-hidden="true" className="icon" />
            </div>

            <div className="label-group">
                <div className="label-wrapper">
                    <label htmlFor="people">Number of People</label>
                    <p>Error</p>
                </div>
                <input type="number" id="people" />
                <img src={person} aria-hidden="true" className="icon" />
            </div>
        </div>
    )
}
 
export default Form

