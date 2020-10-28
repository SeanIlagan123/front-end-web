// Importing other page components
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import GradePoint from './components/GPA_page';
import Profile from './components/Profile';
import Downloads from './components/Downloads';

//Importing standard libraries.
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/downloads" component={Downloads}/>
          <Route path="/gradepointaverage" component={GradePoint}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
