import React from 'react';
import './scroll.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// PAGES
import HomePage from './components/Home';
import AboutPage from './components/About';
import ContactsPage from './components/Contacts';

const App = () => {
  return (
    <div style={{ fontFamily: 'Raleway' }}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contacts' component={ContactsPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
