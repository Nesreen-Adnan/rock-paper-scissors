import "./Box.css";
import {Item} from "../index";
function Box({random, title, itemInfo, dir, state}) {
    return (
        <div className={`box text-center ${random? 'random': ''}  ${dir}`}>
            <p className="box-title">{title}</p>
            <Item id={itemInfo.id} name={itemInfo.name} color={itemInfo.color} img={itemInfo.img} state={state} />
        </div>
    )
}
export default Box;