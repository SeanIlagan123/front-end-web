import React from 'react';
// import {Link} from 'react-router-dom'

function SignUp() {
    return(
        <div>
            <h1>SignUp</h1>
            <form>
                <label>Username</label><br></br>
                <input type ="text"></input><br></br>
                <label>Password</label><br></br>
                <input type ="text"></input><br></br>
                <label>Confirm Password</label><br></br>
                <input type ="text"></input><br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default SignUp;