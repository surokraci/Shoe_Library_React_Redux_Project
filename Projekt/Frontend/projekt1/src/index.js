import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import colorwayReducer from './ducks/colorways/reducers';
import ShoeReducer from './ducks/shoes/reducers';
import ShopReducer from './ducks/stores/reducers';
import AuctionReducer from './ducks/auctions/reducers';

const store = createStore(
  combineReducers({
    shoes: ShoeReducer,
    colorways: colorwayReducer,
    shops: ShopReducer,
    auctions: AuctionReducer
  }), applyMiddleware(thunk)
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
