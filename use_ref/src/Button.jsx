import React, {useState, useRef} from "react";

function Button(){
    const name = useRef("")
    const [nameValue, setNameValue] = useState("")

    function buttonHandler(){
        name.current.value = "arman"
    }

    function nameChangeHandler(){
        setNameValue(name.current.value)
    }
    return(
        <div>
            <p>enter your name here : <br /></p>
            <input type="text" ref={name} onChange={nameChangeHandler}/>
            <p>name: {nameValue}</p>
            <button onClick={() => name.current.focus()}>Write</button>
            <button onClick={buttonHandler}>Change Name</button>
        </div>
    )
}

export default Button