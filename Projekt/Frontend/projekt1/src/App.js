import logo from './logo.svg';
import ColorwayList from './ui/colorways/colorList';
import Home from './ui/core/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ColorForm from './ui/colorways/colorForm';
import ShoeList from './ui/shoes/shoeList';
import ShoeForm from './ui/shoes/shoeForm';

const axios = require('axios').default;


function App() {
  
  
  return (
    <div>
      <Router>
      <div >
        <nav className='sidebar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/colorways">Colorways</Link>
            </li>
            <li>
              <Link to="/shoes">Yeezys</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          {/* <Route exact path="/actors/:id">
            <ActorDetail />
          </Route> */}
          <Route path="/shoesForm">
            <ShoeForm/>
          </Route>
          
          <Route path="/shoes">
            <ShoeList/>
          </Route>
          <Route path="/colorwaysForm">
            <ColorForm/>
          </Route>
          
          <Route path="/colorways">
            <ColorwayList/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
