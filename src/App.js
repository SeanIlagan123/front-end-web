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
      store: null,
    };
  }

  componentDidMount() {
    this.handleCheckStatus();
  }

  handleCheckStatus() {
    axios
      .post("/api/user/status", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        console.log("User is logged in");
        this.setState({ login: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ status: "Incorrect" });
      });
  }

  render() {
    return (
      <div>
        <Router>
          <Nav login={this.state.login} />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home login={this.state.login} />}
            />
            <Route path="/about" component={About} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/gradepointaverage" component={GradePoint} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
