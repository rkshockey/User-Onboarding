import * as yup from 'yup'

const schema = yup.object().shape({
    fname: yup.string(),
    lname: yup.string().required('Last name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    avatarUrl: yup.string().url('Must use valid url for avatar'),
    termsService: yup.boolean().oneOf([true], 'You must agree to the Terms of Service')
})

export default schema