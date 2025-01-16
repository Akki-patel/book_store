import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';



const Login = () => {
    const [message, setMessage] = useState("");
    const { loginUser, signInWithGoogle } = useAuth()
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("login succesfull")
            navigate("/")

        } catch (error) {
            setMessage("please provide valid email and password")

        }
    }

    const handlegooglesignin = async () => {
        try {
            await signInWithGoogle();
            alert("Login successfull with google")
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("please provide valid email and password")

        }

    }
    return (

        <div className='h-[calc(100vh-120px)] flex justify-center items-center' >
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold mb-4'>Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor='email'>Email</label>
                        <input type="email" name='email' id='email' placeholder='Email Address'
                            {...register("email", { required: true })}
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor='password'>Password</label>
                        <input type="password" name='password' id='password' placeholder='Password'
                            {...register("password", { required: true })}
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }
                    <div className=''>
                        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Login</button>
                    </div>
                </form>
                <p className='aligin-baseline font-medium mt-4 text-sm'>Haven't an account? Please <Link className='text-blue-500 hover:text-blue-700' to="/register">Register    </Link></p>

                <div mt-4>
                    <button
                        onClick={handlegooglesignin}
                        className='w-full flex flex-wrap gap-1 items-center justify-center bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none'>

                        <FaGoogle className='mr-2' />
                        Sign in with Google
                    </button>
                </div>
                <p className='mt-5 text-center text-grey-500 text-xs'>©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login
