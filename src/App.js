// Importing other page components
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import GradePoint from './components/GPA_page';
import Login from './components/Login';
import Downloads from './components/Downloads';
import SignUp from './components/SignUp';


//Importing standard libraries.
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Axios from 'axios';

class App extends React.Component {
  state = {};
  componentDidMount() {

    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    Axios.get('./users/login', config)
      .then(
        res => {
          this.setState({
            user: res.data
          });
        },
        err => {
          console.log(err)
        }
      )
  }

  render() {
    return (
      <div>
        <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/downloads" component={Downloads}/>
              <Route path="/gradepointaverage" component={GradePoint}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
