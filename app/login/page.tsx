'use client'

import React, { useState } from 'react';
import axiosInstancePrivate from '@/service/axiosInstancePrivate';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
export default function Login() {
  const defaultValues = {
    username: '',
    password: ''
  };

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({ defaultValues });

  const [data, setData] = useState(null);

  const onSubmit = async (data:any) => {
    if( data.username&&data.password){
      
    
    const newUser = {
      username: data.username,
      password: data.password
    };

    
    try {
      const response = await axiosInstancePrivate.post("/api/auth/login", newUser);
      setData(response.data);
      console.log(response.data);
Cookies.set('access_token', response.data.jwtToken)
      window.location.replace('/dashboard')

      // Aquí podrías llamar a reset si quisieras restablecer el formulario después de enviarlo
      // reset();
    } catch (error) {
      console.error(error);
    }}
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg shadow-gray-400 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
           
            {...register("username")}
            name='username'
            id='username'
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            placeholder="Email address"/>
          
          <input 
            {...register("password")}
            type="password" 
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            placeholder="Password"/>

<div className="flex items-center justify-between flex-wrap">
          <label  className="text-sm text-gray-900 cursor-pointer">
            <input type="checkbox" id="remember-me" className="mr-2"/>
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
          <p className="text-gray-900 mt-4"> Do not have an account? <a href="/register" className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
        </div>
        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
        </form>
      </div>
    </div>
  )
}
