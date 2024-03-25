import "./Result.css";
import {useEffect, useState, createContext} from "react";
import {ResultItems, ShowResult} from "../index";
export const FinalResult = createContext(null);
function Result() {
    const [result, setResult] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".result").classList.add("show");
        }, 50);
    },[])
    return (
        <FinalResult.Provider value={{result, setResult}}>
            <div className="result content">
                <ResultItems />
                <ShowResult />
            </div>
        </FinalResult.Provider>
    )
}
export default Result;
