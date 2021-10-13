import React, { useCallback, useState } from 'react';
import Comments from './components/ListaP';
import axios from 'axios'
function App() {

  
  const [add, setAdd] = useState([])
  const [refresh, setRefresh] = useState(false)

  const produkty = useCallback(()=>{
    axios.get('http://fakestoreapi.com/products')
        .then(response => setAdd(response.data))
  }, []);

  return (
    <div>
      <h1>Produkty </h1>
      <Comments produkty={produkty} add={add}/>
    </div>
  );
}

export default App;
