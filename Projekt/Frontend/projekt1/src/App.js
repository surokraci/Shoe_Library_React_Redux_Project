
import { useEffect } from "react";
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
import ShoeDetail from './ui/shoes/shoeDetail';
import ShoeEditForm from './ui/shoes/shoeEditForm';
import { XgetShoesList } from './ducks/shoes/operations';
import { getColorwaysList } from './ducks/colorways/operations';
import { getAuctionsList } from './ducks/auctions/operations';
import { getShopsList } from './ducks/stores/operations';
import ShopsList from "./ui/shops/ShopList";
import { connect } from "react-redux";

const axios = require('axios').default;


function App({XgetShoesList, getColorwaysList, getAuctionsList, getShopsList}) {
  useEffect(() => {
    XgetShoesList()
    getColorwaysList()
    getAuctionsList()
    getShopsList()
    
    
  }, []);
  
  
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
            <li>
              <Link to="/shops">Sellers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          {/* <Route exact path="/actors/:id">
            <ActorDetail />
          </Route> */}
          <Route path="/shops">
            <ShopsList/>
          </Route>
          <Route path="/shoes/:id/edit">
            <ShoeEditForm/>
          </Route>
          <Route path="/shoes/:id">
            <ShoeDetail/>
          </Route>
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

const mapDispatchToProps = {
  XgetShoesList,
  getColorwaysList,
  getShopsList,
  getAuctionsList
}

export default connect(null, mapDispatchToProps)(App);
