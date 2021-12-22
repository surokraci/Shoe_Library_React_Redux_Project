import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GiftForm }  from "./Gifts/GiftForm";
import { GiftList } from "./Gifts/GiftList";


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
            <GiftForm />
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
