import React, {useState, useEffect} from "react";

function Button(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    function increase(){
        setCount(c => c+1)
    }

    function decrease(){
        setCount(c => c-1)
    }

    function handleColorChange(){
        setColor(color => (color === "green") ? "red" : "green")
    }

    useEffect(() => {
        alert("welcome to my page")
    }, [])

    useEffect(() => {
        document.title = `count ${count} ${color}`
    }, [count, color])

    return(
        <div>
            <p style={{color: color}} className="display">Count: {count}</p>
            <button onClick={increase} className="increase">+</button>
            <button onClick={decrease} className="decrease">-</button> <br />
            <button onClick={handleColorChange} className="color">change colour</button>
        </div>
    )
}

export default Button