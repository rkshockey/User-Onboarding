import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import axios from 'axios'

const initialFormValues = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  avatarUrl: '',
  termsService: false,
}

function App() {

  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  function submitForm () {
    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      avatarUrl: formValues.avatarUrl.trim()
    }
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    setFormValues(initialFormValues)
  }

  function changeForm (name, value) {
    setFormValues({...formValues, [name]: value})
  }


  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Form submit={submitForm} change={changeForm} values={formValues} />
    </div>
  );
}

export default App;
