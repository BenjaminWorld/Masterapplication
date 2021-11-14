import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar-components'
import Background from './components/background-components';
import Content from './components/Content';
import Education from './components/Education';
import Interests from './components/Work_Experience';
import Skills from './components/Skills';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename="Masterapplication">
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Content/>
          </Route>
          <Route exact path="/Education">
            <Education/>
          </Route>
          <Route exact path="/Interests">
            <Interests/>
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
