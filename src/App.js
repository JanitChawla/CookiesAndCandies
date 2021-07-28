import './App.css';
import NavBar from './components/Navbar/navbar';
import { Route, Switch } from "react-router-dom";
import home from './components/Home'
import SignUp from './components/Auth/signup';
import LogIn from './components/Auth/login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch >
        <Route exact path='/' component={home} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/LogIn' component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
