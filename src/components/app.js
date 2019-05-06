import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from './quiz';
import HomePage from './HomePage';


function App() {
  return (
    <Router>
      <div>
        <div className='header'>
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link to="/quiz">GET STARTED</Link>
          </div>
        </div>

        <hr />

        <Switch>
        <Route path="/quiz" component={Quiz} />
        <Route path="/" component={HomePage} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;