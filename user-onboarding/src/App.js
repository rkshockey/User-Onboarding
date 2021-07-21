import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
