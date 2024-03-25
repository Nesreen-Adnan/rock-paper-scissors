import "./Items.css";
import Item from "../Item/Item";
import itemsInfo from "../../Data/ItemsInfo";
import { useEffect } from "react";
function Items() {
    useEffect(()=>{
        setTimeout(()=>document.querySelector(".items").classList.add("show"), 10)
    },[])
    const items = itemsInfo.map(item => {
        return <Item key={item.id} id={item.id} animation="minimize" select={id => this.select(id)} name={item.name} dir={item.dir} color={item.color} img={item.img} />
    });
    return (
        <div className="items relative content flex">
            <div className="triangle"></div>
            {items}
        </div>
    )
}
export default Items;