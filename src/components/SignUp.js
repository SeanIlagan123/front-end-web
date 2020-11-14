import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
      passwordCheck: this.passwordCheck,
    };
    axios
      .post("http://localhost:5000/api/user/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>SignUp</h1>
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
          <label>Confirm Password</label>
          <br></br>
          <input
            type="password"
            name="passwordCheck"
            placeholder="confirm password"
            onChange={(e) => (this.passwordCheck = e.target.value)}
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
