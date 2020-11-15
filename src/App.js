// Importing other page components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import GradePoint from "./components/GPA_page";
import Login from "./components/Login";
import Downloads from "./components/Downloads";
import SignUp from "./components/SignUp";

//Importing standard libraries.
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    this.handleCheckStatus();
  }

  handleCheckStatus() {
    axios
      .post("/api/user/status", { withCredentials: true })
      .then((res) => {
        console.log("User is logged in");
        this.setState({ login: true });
      })
      .catch(() => {
        this.handleRefresh();
      });
  }

  handleRefresh() {
    axios
      .post("/api/user/refresh", { withCredentials: true })
      .then((res) => {
        console.log("Access Token Changed");
        this.setState({ login: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ login: false });
      });
  }

  // The logout method works. But it stops working after the accessToken expires.
  // Although the accessToken updates on expire. It only updates properly
  // When the website is refreshed.
  userLogout = (e) => {
    e.preventDefault();
    axios.get("/api/user/logout", { withCredentials: true }).then((res) => {
      console.log(res);
      this.setState({ login: false });
    });
  };

  userLogin = (e) => {
    this.setState({ login: true });
  };

  render() {
    return (
      <div>
        <Router>
          <Nav login={this.state.login} userLogout={this.userLogout} />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home login={this.state.login} />}
            />
            <Route path="/about" component={About} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/gradepointaverage" component={GradePoint} />
            <Route
              path="/login"
              component={() => <Login userLogin={this.userLogin} />}
            />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
