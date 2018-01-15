import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Admin = () => <h1>Admin</h1>;

const NavBar = () => (
  <ul>
    <li>
      <NavLink activeClassName="active"  to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/admin">Admin</NavLink>
    </li>
    <li>
      <NavLink
        to={{
          pathname: '/logs',
          search: '?filter=active', 
          state: { fromNavBar: true }
        }}
      >
        Logs
      </NavLink>
    </li>
    <li>
      <NavLink replace={true} to="/children">Children</NavLink>
    </li>
  </ul>
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route strict path="/admin" component={Admin} />
          <Route path="/logs" render={() => <h1>Logs</h1>} />
          <Route
            path="/children"
            children={({ match }) => {
              if (match) {
                return <h1>Children</h1>;
              }
              return null;
            }}
          />
        </div>
      </Router>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
