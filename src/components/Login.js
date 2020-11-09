import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// https://www.youtube.com/watch?v=I3PC8pV1SBM
// https://serverless-stack.com/chapters/create-a-login-page.html

class Login extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        login: false,
        store: null
      }
    } 
    
    componentDidMount() { // saves state and allows refresh of page
      let store = JSON.parse(localStorage.getItem('login'))
      if(store && store.login) {
        this.setState({login:true, username: store.username, store:store})
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
          localStorage.setItem('login', JSON.stringify({
            login: true,
            token: res.data.token,
            username: this.username
          }))
          this.setState({login: true})
          this.setState({username: this.username})
          console.log(this.username)
        })
          .catch(err => {
            this.setState({status: 'Incorrect'})
          })
    }

    logout = e =>{
      e.preventDefault();
      this.setState({login: false})
      localStorage.removeItem('login');
    }


    render() {
        console.log(this.state.username);
        return(
          <div>
                {
                  !this.state.login?
                    <div>
                    <h1>Login</h1>
                    <h1>Status: {this.state.status}</h1>
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
                  :
                <div>
                  <h1>You are logged in as {this.state.username} </h1>
                  <button onClick = { this.logout }>Logout</button>
                </div>
                }
            </div>
        );
    }
}

export default Login;