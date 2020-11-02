import React from 'react';
import {Link} from 'react-router-dom'
// https://serverless-stack.com/chapters/create-a-login-page.html

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        /* username: "",
        password: "", */
        isLoaded: false
      }
    }

    componentDidMount() {
      fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(result => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        }
      )
      .then((data) => console.log('This is your data', data))
      
    }

    handleChange(e) {
      this.setState({value: e.target.value});
    }

    render() {
        const { isLoaded, items } = this.state;
        return(
            <div>
                <ul>
          {items.map(item => (
            <li>
              {item.username}
            </li>
          ))}
        </ul>
                {/* /* <h1>Login</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <form>
                    <label>Username</label><br></br>
                    <input type ="text" name ="username" placeholder = "username"></input><br></br>
                    <label>Password</label><br></br>
                    <input type ="text" name ="password" placeholder = "password"></input><br></br>
                    <input type="submit" value="Submit" onClick={event => this.handleSubmit(event)}></input>
                </form>
                <Link to = '/signup'><p>SignUp</p></Link> */}
            </div>
        );
    }
}

export default Login;