import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Appbar from './component/Appbar/Appbar';



function App() {
  return (
    <div className="App">
      <Router>
     <Appbar></Appbar>
      <Switch>
          <Route path="/home">
            <Home />
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
