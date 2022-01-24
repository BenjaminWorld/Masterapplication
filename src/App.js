import './App.css';
import Navbar from './components/navbar-components'
import Background from './components/background-components';
import Content from './components/Content';
import Education from './components/Education';
import Work_Experience from './components/Work_Experience';
import Skills from './components/Skills';
import React from 'react';


import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router basename="Myresume">
      <div className="App">
        <Navbar/>
          <Switch>

            <Route exact path="/">
              <Content/>
            </Route>

            <Route exact path="/Education">
              <Education/>
            </Route>

            <Route exact path="/Work_Experience">
              <Work_Experience/>
            </Route>

            <Route exact path="/Skills">
              <Skills/>
            </Route>
            
          </Switch>
      </div>
    </Router>
  )
}

export default App;
