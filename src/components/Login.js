import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// https://serverless-stack.com/chapters/create-a-login-page.html

class Login extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        stateOn: "Offline",
        errors: {}
      }
    } 

    handleSubmit = e => {
      e.preventDefault();
      const userData = {
        username: this.username,
        password: this.password,
      };

      axios.post('/users/login', userData)
        .then(res => {
          console.log(res)
          this.setState({stateOn: 'Online'})
        })
          .catch(err => {
            this.setState({stateOn: 'Incorrect'})
          })
    }


    render() {
        return(
          <div>
                <h1>Login</h1>
                <h1>Status: {this.state.stateOn}</h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>Username</label><br></br>
                    <input type ="text" name ="username" placeholder = "username" 
                      onChange={e => this.username = e.target.value}>
                    </input><br></br>
                    <label>Password</label><br></br>
                    <input type ="password" name ="password" placeholder = "password" 
                      onChange={e => this.password = e.target.value}>
                    </input><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
                <Link to = '/signup'><p>SignUp</p></Link>
            </div>
        );
    }
}

export default Login;