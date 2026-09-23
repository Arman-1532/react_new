
function Student({name,age,roll, isStudent}){
    return(
        <div className="student">
            <h1>Name: {name}</h1>
            <h4>Age: {age}</h4>
            <h4>Roll: {roll}</h4>
            <h4>Student? : {isStudent? "yes" : "no"}</h4>
        </div>
    );
}

export default Student;