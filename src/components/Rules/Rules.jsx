import "./Rules.css";
import {Component} from "react";
import RulesDetails from "../RulesDetails/RulesDetails";
import click from "../../assests/sounds/click.mp3";
class Rules extends Component {
  toggleShow() {
    let audio = new Audio(click);
    audio.play();
    document.querySelector(".rules").classList.toggle("show");
  }
  render () {
    return (
      <>
        <button className="btn rules-btn uppercase text-center absolute" onClick={this.toggleShow}>rules</button>
        <RulesDetails toggleShow={this.toggleShow} />
      </>
    )
  }
}
export default Rules;