import { NavLink } from "react-router-dom";

function Login({handleLogin, updateLoginFormData}){
    return(
        <form>
            <input type="text" name="username" placeholder="Enter Username" onChange={updateLoginFormData} required/> 
            <input type="password" name="password" placeholder="Enter Password" onChange={updateLoginFormData} required/> 
            <NavLink className="nav-link" to="/" onClick={handleLogin}>Submit</NavLink>
            {/* <input type="submit"/>  */}
        </form>
    )
}

export default Login;