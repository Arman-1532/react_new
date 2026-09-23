import React, { useContext } from "react";
import ValueContext from "./context/context.js";

function Button(){
    const value = useContext(ValueContext);

    function handleClick(){
        value.setCount(value.count + 1);
    }
    return(
        <div>
            <button onClick={handleClick}>Value from Context: {value.count}</button>
        </div>
    )
}

export default Button;