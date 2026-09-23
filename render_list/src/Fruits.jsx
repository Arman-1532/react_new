
function Fruits({arr}){
    return(
        <div>
            <h2>Popular fruits in Bangladesh</h2>
            <ol>
                { arr.map((element,index) => 
                (<li key = {index}>{element}</li>))}
            </ol>
        </div>
    )
}

export default Fruits
