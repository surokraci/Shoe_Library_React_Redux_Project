import { createStore } from 'redux'
import reducer from './modules/index.js'

let store = createStore(reducer)
console.log(store.getState())

store.subscribe(() => console.log(JSON.stringify(store.getState())));

store.dispatch({ type: 'ADD_TODO', payload: { id: 1, title: 'Rozpakuj zmywarke', done: false} });
store.dispatch({ type: 'ADD_TODO', payload: { id: 2, title: 'Nakarm kota', done: false} });
store.dispatch({ type: 'FINISH_TODO', payload: {id: 1}})
store.dispatch({ type: 'UPDATE_TODO', payload: { id: 1, title: 'Wypakuj ze zmywarki'}})

store.dispatch({ type: 'ADD_NOTE', payload: {id: 1, content: "rzeczy rzeczy "}})