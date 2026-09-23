
function Button(){
    let count = 0;
    function handleClick(name){
        if(count < 3){
            alert("you clicked a button");
            count++;
            console.log(`${name} clicked the button ${count} times`)
        }
        else{
            console.log(`${name} stop clicking the button`)
        }
    }
    return(
        <div className="button">
            <button onClick={() => handleClick("arman")}>click me</button>
        </div>
    )
}
export default Button