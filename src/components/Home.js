import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {!this.props.login ? (
          <p>Hello</p>
        ) : (
          <p>Welcome {Cookies.get("username")}</p>
        )}
      </div>
    );
  }
}

export default Home;
