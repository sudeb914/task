import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Appbar from './component/Appbar/Appbar';
import OverNav from './component/OverNav/OverNav';
import Event from './component/Event/Event';



function App() {
  return (
    <div className="App">
      <Router>
        <OverNav></OverNav>
     <Appbar></Appbar>
      <Switch>
      <Route exact path="/">
            <Home />
          </Route >
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
         
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
