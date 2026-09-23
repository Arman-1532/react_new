import { useState } from "react";

function Button(){
    const [value, setValue] = useState(0);

    const increase = () =>{
        setValue(value+1)
    }
    const decrease = () =>{
        setValue(value-1)
    }
    const reset = () =>{
        setValue(0)
    }

    return(
        <div className="buttons">
            <p className="value">Value : {value}</p>
            <button className="increase_button" onClick={increase}>Increase</button>
            <button className="decrease_button" onClick={decrease}>Decrease</button>
            <button className="reset_button" onClick={reset}>Reset</button>
        </div>
    )
}

export default Button