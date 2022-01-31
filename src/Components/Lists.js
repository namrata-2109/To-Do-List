import react from "react";
import Alert from "./Alert";
const Lists = (prop) =>{
    return (
    <>
    <div className="delete">
    <li> {prop.item} </li>
    <button className="reset" type ="Reset" onClick={Alert}>➖</button>
    </div>
    </>
    );
};

export default Lists