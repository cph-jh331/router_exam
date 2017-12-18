import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import Repositories from './components/Repositories';
import Repository from './components/Repository';
import Home from './components/Home';
import About from './components/About';

const App = () => (
  <Router>
    <div>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/repositories">Reposistories</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/repo/:id" component={Repository} />
      </Switch>
    </div>
  </Router>
)
export default App
