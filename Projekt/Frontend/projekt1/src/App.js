import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;

function App() {
  axios.get('http://localhost:4000/shoes')
  .then(function (response) {
    // handle success
    console.log(response.data.shoes);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  return (
    <div>
      hello world
    </div>
  );
}

export default App;
