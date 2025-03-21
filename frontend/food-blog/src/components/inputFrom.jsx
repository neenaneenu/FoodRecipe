import React from 'react'
import { useFormik } from "formik"
import {api} from "../axios"
import  toast from "react-hot-toast"
import {useDispatch} from "react-redux"
import {createUser} from "../Redux/userSlice"
import { useNavigate} from "react-router"



const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
            
        },
        onSubmit: async (values) => {
            try {
                const { data } = await api.post("http://localhost:3000/login",  values)
                console.log(data.token)
                localStorage.setItem("access_token", data.token)
                toast.success("logged in")
                console.log(data.user);
                dispatch(createUser(data.user))
                navigate("/")
                
            } catch (err) {
                console.log(err)
            }
        }
    })

    return (
        <div className='d-flex justify-content-center mt-4'>
            <form onSubmit={formik.handleSubmit} className='w-50 d-flex flex-column gap-2'>
                <input onChange={formik.handleChange} value={formik.values.email} className='p-2' style={{outline: 0}} type="text" name='email' placeholder='Enter email'/>
                <input onChange={formik.handleChange} value={formik.values.password} className='p-2' style={{outline: 0}} type="password" name='password' placeholder='Enter password'/>
                <button className='btn btn-success w-100' type='submit'>LOGIN</button>
                <a href="/Signup">Create Account</a>
            </form>
        </div>
    )
}

export default Login



