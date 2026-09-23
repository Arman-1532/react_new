function Login(props){
    const welcomeMessage = <h3 className="pass">welcome {props.name}</h3>
    const logInMessage = <h3 className="fail">please log in first</h3>

    return(
        <div>
            {props.isLoggedIn ? welcomeMessage : logInMessage}
        </div>
    )
}

export default Login