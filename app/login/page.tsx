"use client"
import React, { useState } from 'react'
import axiosInstancePrivate from '@/service/axiosInstancePrivate';
import { useForm } from 'react-hook-form'
import { register } from 'module';
import { log } from 'console';

export default function Login(){
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [data, setData] = useState(null);
  
  //Guardar datos
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function createPost() {
    axiosInstancePrivate
      .post("/api/auth/login", {
        username,
        password
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      console.log({username, password});
      
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg shadow-gray-400 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
      <form onSubmit={createPost} className="flex flex-col">
        
        <input
        value={username} onChange={(e) => setUsername(e.target.value)}
         type="email"
        // {...register("username",{
        //   required: {
        //     value: true,
        //     message : "username is required"
        //   }

        // })}
        // name='username'
        // id='username'
        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
        placeholder="Email address"/>
        
        <input 
         value={password} onChange={(e) => setPassword(e.target.value)}
        type="password" 
        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
        placeholder="Password"/>


        <div className="flex items-center justify-between flex-wrap">
          <label  className="text-sm text-gray-900 cursor-pointer">
            <input type="checkbox" id="remember-me" className="mr-2"/>
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
          <p className="text-gray-900 mt-4"> Do not have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
        </div>
        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
      </form>
    </div>
  </div>
  
  )
}
