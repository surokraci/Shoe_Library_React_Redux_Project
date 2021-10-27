import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/todoForm';
import ToDoList from './components/todoList';

import ToDoDetails from './components/todoDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <ToDoForm />
      <ToDoList />
      <Switch>
        <Route path="/todos/:id">
            <ToDoDetails />
          </Route>
      </Switch>
    </div>

    </Router>
    
  );
}

export default App;
