
function Login({handleLogin, updateLoginFormData}){
    return(
        <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="Enter Username" onChange={updateLoginFormData} required/> 
            <input type="text" name="password" placeholder="Enter Password" onChange={updateLoginFormData} required/> 
            <input type="submit"/> 
        </form>
    )
}

export default Login;