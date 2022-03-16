import './App.css';
import {BrowserTouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/register' component={RegisterPage}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/' component={LandingPage}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
