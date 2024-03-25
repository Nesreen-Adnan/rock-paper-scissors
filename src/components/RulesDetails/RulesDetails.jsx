import "./RulesDetails.css";
import rules from "../../assests/images/image-rules.svg";
import closeIcon from "../../assests/images/icon-close.svg";
const RulesBtn = ({toggleShow}) => {
    return (
        <div className={`rules absolute`}>
            <div className="container absolute">
                <div className="header">
                    <h2>rules</h2>
                    <img className="close-btn transition" onClick={toggleShow} src={closeIcon} alt="close button" />
                </div>
                <img className="rules-img" src={rules} alt="Rules" />
            </div>
        </div>
    )
}
export default RulesBtn;
