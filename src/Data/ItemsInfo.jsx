import rock from "../assests/images/icon-rock.svg";
import paper from "../assests/images/icon-paper.svg";
import scissors from "../assests/images/icon-scissors.svg";
let i = 0;
const ItemsInfo = [
    {id: i++, name: "rock", dir: "bottom", color: "red", img: rock, itemColor: "hsl(349, 70%, 56%)", shdowColor: "hsl(349, 71%, 52%)"},
    {id: i++, name: "paper", dir: "left", color: "blue", img: paper, itemColor: "hsl(230, 89%, 65%)", shdowColor: "hsl(230, 89%, 62%)"},
    {id: i++, name: "scissors", dir: "right", color: "yellow", img: scissors, itemColor: "hsl(40, 84%, 53%)", shdowColor: "hsl(39, 89%, 49%)"}
]
export default ItemsInfo;