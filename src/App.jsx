import './App.css';
import { createContext, useState } from 'react';
import {Header, Items, Rules, Result} from "./components/index";
export const Choices = createContext(null);
function App() {
    const [userChoice, setUserChoice] = useState(null)
    const randChoice = Math.floor(Math.random()*3);
    const choicesValues = {userChoice, setUserChoice, randChoice}
    return (
      <div className="App">
        <Header/>
        <Choices.Provider value={choicesValues}>
          {userChoice == null? <Items />: <Result />}
        </Choices.Provider>
        <Rules />
      </div>
    )
}
export default App;