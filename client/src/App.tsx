import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Banner from './Components/Banner/Banner';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Banner />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;