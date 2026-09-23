
function Employee(prop){
    return(
        <div className="employee">
            <h1>Name: {prop.name}</h1>
            <h4>Id: {prop.id}</h4>
            <h4>student? : {prop.isStudent? "yes" : "no"}</h4>
        </div>
    );
}
export default Employee