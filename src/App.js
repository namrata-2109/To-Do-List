import React, {useState} from "react";
import Lists from "./Components/Lists";

const App = () => {

const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);

const itemEvents = (event) => {
  setInputList(event.target.value);
};

const listofItems = () => {
  setItems((oldItems) =>{
    return [...oldItems, inputList];
  });

  setInputList("");
};

  return (
    <>
    <div className = "back">     
      <div className = "inner">
        <h1 className="title">Create ToDo Listπ</h1>
        
          <input 
            type = "text" 
            placeholder="Write Your Task!!!π" 
            onChange={itemEvents} 
          />
        <button className="add" onClick={listofItems}>β</button>
      
          <ol>
            {Items.map( (valu) => {
            return  <Lists item = {valu}/>;
            })}
          </ol>
        </div>
        </div>
    </>
  );
};
export default App