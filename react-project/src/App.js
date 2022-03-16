import './App.css';
import {Router, Route, Link} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <Router>
    <div> 
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">login page</Link>
        </li>
      </ul>

      <div>
          <Route exact path='/register' component={RegisterPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/' component={LandingPage}></Route>
        
      </div>
    </div>
    </Router>
    
  );
}

export default App;
