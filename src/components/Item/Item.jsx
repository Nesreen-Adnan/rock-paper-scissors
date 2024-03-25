import "./Item.css";
import {Choices} from "../../App";
import {useContext} from "react";
import chooseAudio from "../../assests/sounds/choose.mp3";
function Item({animation, state, dir, color, img, name, id}) {
  const {setUserChoice} = useContext(Choices);
  const select = () => {
    let audio = new Audio(chooseAudio);
    audio.play();
    document.querySelector(".items").classList.remove("show");
    setTimeout(()=>setUserChoice(id), 500)
  }
  return (
    <div className={`item flex circle ${animation || ''} ${state} ${dir || ''} ${color || ''}`} onClick={()=>animation?select():''}>
        <div className="border relative circle">
            <div className="container relative flex circle">
                <img src={img} alt={name} />
            </div>
        </div>
        {state == "win"?<span className="shadow"></span>:""}
    </div>
  )
}
export default Item;
