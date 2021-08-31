import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import "antd/dist/antd.css";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/dashboard'  component={Dashboard}/>
      </Switch>
    </Router>
    
  );
}

export default App;
