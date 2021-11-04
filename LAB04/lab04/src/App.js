import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './core/Dashboard';
import DirectorDetail from "./directors/DirectorDetail";
import DirectorEditForm from "./directors/DirectorEditForm";
import DirectorForm from "./directors/DirectorForm";
import DirectorList from "./directors/DirectorList";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/directors/add">Add director</Link>
            </li>
            <li>
              <Link to="/directors">Directors</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          
          <Route path="/directors/add">
            <DirectorForm />
          </Route>
          <Route path="/directors/:id/edit">
            <DirectorEditForm />
          </Route>
          
          <Route exact path="/directors/:id">
            <DirectorDetail />
          </Route>
          
          <Route path="/directors">
            <DirectorList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
