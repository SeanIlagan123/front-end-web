import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// https://www.youtube.com/watch?v=I3PC8pV1SBM
// https://www.youtube.com/watch?v=G41O8H0eioM
// https://serverless-stack.com/chapters/create-a-login-page.html
// http://localhost:5000

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: this.username,
      password: this.password,
    };
    axios
      .post("/api/user/login", userData, { withCredentials: true })
      .then((res) => {
        this.setState({ login: true });
        this.setState({ username: this.username });
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ status: "Incorrect" });
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <h1>Status: {this.state.status}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <br></br>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => (this.username = e.target.value)}
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => (this.password = e.target.value)}
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
        <Link to="/signup">
          <p>SignUp</p>
        </Link>
      </div>
    );
  }
}

export default Login;
