import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <div className = "topnav">
        <nav>
          <h3>Logo</h3>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/gradepointaverage">
              <li>GPA</li>
            </Link>
            <Link to="/downloads">
              <li>Downloads</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            {!this.props.login ? (
              <Link to="/login">
                <li>Login</li>
              </Link>
            ) : (
              <Link to="/" onClick={this.props.userLogout}>
                <li>Logout</li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
