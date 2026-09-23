import React, {useState} from "react";

function Form(){
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState("")
    const [bio, setBio] = useState("")
    const [country, setCountry] = useState("")

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleAgeChange(event){
        setAge(event.target.value)
    }

    function handleGenderChange(event){
        setGender(event.target.value)
    }

    function handleCountryChange(event){
        setCountry(event.target.value)
    }
    return(
        <form action="action.php" method="POST">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="Enter your name" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <label htmlFor="age">Age: </label>
            <input type="number" id="age" onChange={handleAgeChange} value={age}/>
            <p>Age: {age}</p>

            <input type="radio" value="male" name="gender" id="male" checked={gender === "male"} onChange={handleGenderChange}/>
            <label htmlFor="male">Male </label>
            <input type="radio" value="female" name="gender" id="female" checked={gender === "female"} onChange={handleGenderChange}/>
            <label htmlFor="female">Female </label>
            <p>Gender: {gender}</p>

            <label htmlFor="bio">Bio: </label>
            <textarea name="bio" id="bio" value={bio} onChange={(event) => {setBio(event.target.value)}}></textarea>
            <p>Bio: {bio}</p>

            <label htmlFor="country">Country: </label>
            <select name="country" id="country" onChange={handleCountryChange}>
                <option value="">--select a country--</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
                <option value="nepal">Nepal</option>
            </select>
            <p>Country: {country}</p>

            <input type="submit" className="submit"/>
            <input type="reset" className="reset"/>
        </form>
    )
}

export default Form