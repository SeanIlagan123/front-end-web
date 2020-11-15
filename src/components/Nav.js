import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        {!this.props.login /* check if a user is logged in  */ ? (
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
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </nav>
        ) : (
          <div>
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
                <Link to="/" onClick={this.props.userLogout}>
                  <li>Logout</li>
                </Link>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
