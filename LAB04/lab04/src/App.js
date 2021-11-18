import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ActorDetail from "./actors/ActorDetail";
import ActorForm from "./actors/ActorForm";
import ActorList from "./actors/ActorList";
import './App.css';
import Home from './core/Dashboard';
import DirectorDetail from "./directors/DirectorDetail";
import DirectorEditForm from "./directors/DirectorEditForm";
import DirectorForm from "./directors/DirectorForm";
import DirectorList from "./directors/DirectorList";
import MovieAddActor from "./movies/MovieAddActor";
import MovieDetail from "./movies/MovieDetail";
import MovieForm from "./movies/MovieForm";
import MovieList from "./movies/MovieList"


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
            <li>
              <Link to="/movies/add">Add movie</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/actors/add">Add actor</Link>
            </li>
            <li>
              <Link to="/actors">Actors</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          
          <Route path="/directors/add">
            <DirectorForm />
          </Route>
          <Route path="/movies/add">
            <MovieForm />
          </Route>
          <Route path="/actors/add">
            <ActorForm />
          </Route>
          <Route path="/movies/:id/addActor">
            <MovieAddActor />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route path="/movies">
            <MovieList />
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

          <Route exact path="/actors/:id">
            <ActorDetail />
          </Route>
          
          <Route path="/actors">
            <ActorList />
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
