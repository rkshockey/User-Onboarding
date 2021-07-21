import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import schema from './validation/FormSchema'
import axios from 'axios'
import { reach } from 'yup'


const initialFormValues = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  avatarUrl: '',
  termsService: false,
}

const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  avatarUrl: '',
  termsService: '',
}

function App() {

  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  function submitForm () {
    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      avatarUrl: formValues.avatarUrl.trim()
    }
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => setUsers([...users, res.data]))
      .catch(err => console.log(err))
    setFormValues(initialFormValues)
  }

  function changeForm (name, value) {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  function validate (name, value){
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form submit={submitForm} change={changeForm} values={formValues} errors={formErrors} disabled={disabled} />
      <div className='user-block'>
        {users.map(user => (
          <div className='user-card'>
            <h2>Name: {user.fname} {user.lname}</h2>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <img src={user.avatarUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
