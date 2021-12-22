import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GiftForm from './Gifts/GiftForm';
import GiftList from './Gifts/GiftList.js';
import GiftDetail from './Gifts/GiftDetail';

function App() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/giftform">
            <GiftForm />
          </Route>
          <Route path="/gifts/:id">
            <GiftDetail />
          </Route>
          <Route path="/">
            <GiftList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
