import React from 'react'
import styled from 'styled-components'

function Form (props){
    const { submit, change, values } = props

    function submitForm (evt){
        evt.preventDefault()
        submit()
    }

    function changeForm (evt) {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className='form' onSubmit={submitForm}>
            <label htmlFor='fname'><p>First Name</p>
                <input
                    type='text'
                    id='fname'
                    name='fname'
                    value={values.fname}
                    onChange={changeForm}
                />
            </label>
            <label htmlFor='lname'><p>Last Name</p>
                <input
                    type='text'
                    id='lname'
                    name='lname'
                    value={values.lname}
                    onChange={changeForm}
                />
            </label>
            <label htmlFor='email'><p>Email</p>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={values.email}
                    onChange={changeForm}
                />
            </label>
            <label htmlFor='password'><p>Password</p>
                <input
                    type='text'
                    id='password'
                    name='password'
                    value={values.password}
                    onChange={changeForm}
                />
            </label>
            <label htmlFor='avatarUrl'><p>Avatar Url</p>
                <input
                    type='text'
                    id='avatarUrl'
                    name='avatarUrl'
                    value={values.avatarUrl}
                    onChange={changeForm}
                />
            </label>
            <img src={values.avatarUrl} />
            <label htmlFor='termsService'>
                <p>Agree to the <a href='#'>Terms of Service</a>?</p>
                <input
                    type='checkbox'
                    name='termsService'
                    onChange={changeForm}
                    checked={values.termsService}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form