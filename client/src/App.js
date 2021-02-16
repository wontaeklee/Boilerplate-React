import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LandingPage from './component/views/LandingPage/LandingPage';
import LoginPage from './component/views/LoginPage/LoginPage';
import RegisterPage from './component/views/RegisterPage/Register';
import Auth from '../src/hoc/auth'
function App() {
  return (
   <div className="App">
      <Router>
        <div>      

          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
          </Switch>

        </div>
      </Router> 
    </div>
  );
}


export default App;
