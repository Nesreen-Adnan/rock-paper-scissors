import "./ShowResult.css";
import {useContext, useEffect, useRef} from "react";
import {FinalResult} from "../Result/Result";
import {Choices} from "../../App";
import againAudio from "../../assests/sounds/again.mp3";
function ShowResult() {
    const {result, setResult} = useContext(FinalResult);
    const {setUserChoice} = useContext(Choices);
    const showResult = useRef();
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".show-result").classList.add("show");
            let score = document.querySelector(".score");
            setTimeout(()=>{
                if (result == "win") 
                    ++score.textContent;
                else if (result == "lose") {
                    showResult.current.classList.add("lose");
                    if (score.textContent > 0) 
                        --score.textContent;
                }
            }, 500)
        }, 3500)
    },[result])
    function again() {
        let audio = new Audio(againAudio);
        audio.play();
        document.querySelector(".result").classList.remove("show");
        setTimeout(()=> {
            setResult(null);
            setUserChoice(null);
        }, 1200)
    }
    return (
        <div className="show-result absolute uppercase text-center" ref={showResult}>
            <div>{result=='equal'?'equal':`you ${result}`}</div>
            <button className="btn" onClick={()=>{again()}}>play again</button>
        </div>
    )
}
export default ShowResult;