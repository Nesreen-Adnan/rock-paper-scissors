import "./ResultItems.css";
import { useContext, useEffect } from "react";
import { Choices } from "../../App";
import ItemsInfo from "../../Data/ItemsInfo";
import { Box } from "../index";
import {FinalResult} from "../Result/Result";
import winAudio from "../../assests/sounds/win.mp3";
import loseAudio from "../../assests/sounds/lose.mp3";
import equalAudio from "../../assests/sounds/again.mp3";
function ResultItems() {
  const {result, setResult} = useContext(FinalResult);
  const { userChoice, randChoice } = useContext(Choices);
  let userItem = ItemsInfo.filter((item) => item.id === userChoice),
    randItem = ItemsInfo.filter((item) => item.id === randChoice),
    userChoiceName = ItemsInfo[userChoice].name,
    randChoiceName = ItemsInfo[randChoice].name;
    useEffect(()=>{
        if (userChoiceName === randChoiceName) {
          setResult("equal");
        } else {
            if (userChoiceName === "paper") {
                if (randChoiceName === "rock") {
                  setResult("win");
                } else {
                  setResult("lose");
                }
            } else if (userChoiceName === "rock") {
                if (randChoiceName === "scissors") {
                  setResult("win");
                } else {
                  setResult("lose");
                }
            } else {
                if (randChoiceName === "paper") {
                  setResult("win");
                } else {
                  setResult("lose");
                }
            }
        } 
        setTimeout(() => {
          document.querySelector(".result").classList.add("expand");
        }, 500);
        setTimeout(() => {
          let audioName; 
          if (result == "win") {
            audioName = winAudio;
          } else if (result == "lose") {
            audioName = loseAudio;
          } else {
            audioName = equalAudio;
          }
          let audio = new Audio(audioName);
          audio.play();
        }, 1500);
    },[result])
  return (
    <div className="result-items relative bold">
      <Box
        title="you picked"
        state={result == "win" ? "win" : ""}
        itemInfo={userItem[0]}
        dir="left"
      />
      <Box
        title="the house picked"
        state={result == "lose" ? "win" : ""}
        random="true"
        itemInfo={randItem[0]}
        dir="right"
      />
    </div>
  );
}
export default ResultItems;
