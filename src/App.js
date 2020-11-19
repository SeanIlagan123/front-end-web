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
import Cookies from "js-cookie";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      refreshTimer: 0, // set a dummy refresh time state
    };
  }

  // On start up, update refreshTimer to match the expire time of accessToken
  // Also, check the current status of a user.
  componentDidMount() {
    this.updateTimer();
    this.handleCheckStatus();
  }

  // This prevents the bug where the timer is no longer set to the correct value.
  componentWillUnmount() {
    this.updateTimer();
  }

  // Start running the refresh API when a user is logged in.
  // This takes in the refreshTimer state to match the expire time of accessToken
  // This prevents constant calls from the back end.
  componentDidUpdate(prevProps) {
    if (prevProps.login !== this.state.login && this.state.login === true) {
      const timer = this.state.refreshTimer;
      this.interval = setInterval(() => this.handleRefresh(), timer);
    }
  }

  // Checks if a user is logged in
  handleCheckStatus() {
    axios
      .post("/api/user/status", { withCredentials: true })
      .then((res) => {
        this.setState({ login: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Updates the accessToken
  handleRefresh() {
    axios
      .post("/api/user/refresh", { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  // Logs the user out by removing cookies and setting.
  // Called in the Nav Component
  userLogout = (e) => {
    e.preventDefault();
    axios.get("/api/user/logout", { withCredentials: true }).then((res) => {
      console.log(res);
      this.setState({ login: false });
      console.log("Cleared interval");
      clearInterval(this.interval);
    });
  };

  userLogin = (e) => {
    this.setState({ login: true });
  };

  // Sets the timer for refreshing the token
  updateTimer() {
    axios.get("/api/user/expireTime", { withCredentials: true }).then((res) => {
      this.setState({ refreshTimer: res.data.accessExpire });
    });
  }

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
