import logo from './logo.svg';
import './App.css';
import ProductList from './products/ProductList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './core/Dashboard';
import UserList from './users/UserList';
import UserDetail from './users/UserDetail';
import ProductDetail from './products/ProductDetail';
import ProductForm from './products/ProductForm';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/users/:id">
            <UserDetail />
          </Route>
          <Route path="/productForm">
            <ProductForm />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/users">
            <UserList />
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
