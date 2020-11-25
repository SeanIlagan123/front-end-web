import React from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import "./CSS/Nav.css";
class Nav extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.userLogout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="topnav">
        <nav>
          <h3>Logo</h3>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/gradepointaverage">
              <li>GPA</li>
            </Link>
            {!this.props.login ? (
              <Link to="/login">
                <li>Login</li>
              </Link>
            ) : (
              <div className="dropdown">
                <a className="dropbtn">
                  Profile
                  <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-content">
                  <ul>
                    <Link to="/profile">
                      <li>Profile</li>
                    </Link>
                    <Link to="/downloads">
                      <li>Downloads</li>
                    </Link>
                    <Link to="/" onClick={this.logout}>
                      <li>Logout</li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}
// https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp
export default withRouter(Nav);
