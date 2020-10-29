import React from 'react';
import {Link} from 'react-router-dom'

function Login() {
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label>Username</label><br></br>
                <input type ="text"></input><br></br>
                <label>Password</label><br></br>
                <input type ="text"></input><br></br>
                <input type="submit" value="Submit"></input>
            </form>
            <Link to = '/signup'><p>SignUp</p></Link>
        </div>
    );
}

export default Login;