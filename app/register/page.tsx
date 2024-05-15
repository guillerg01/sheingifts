// components/LoginForm.tsx
'use client'
import React, { useState } from 'react';


import { useRouter } from 'next/navigation';
import axiosInstance from '@/service/axiosInstance';


const i18nNameSpaces = ['register'];
const LoginForm = () => {
  
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  



    return (
    
            <div className="h-screen flex-col flex items-center pt-[6.8rem] space-y-1" >

       


                <div className="  rounded shadow-lg shadow-gray-400  w-[23rem] ">

                <form>
      <div className="flex flex-col items-center justify-center w-full h-full  py-8 mx-auto lg:py-0">
      
          <div className=" space-y-4 md:space-y-6 w-full h-full sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            
            
              </p><div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your username
                </label>
                <input placeholder="JohnDoe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text"/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password"/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Confirm password
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password"/>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms"/>
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light  text-gray-300">
                    I accept the
                    <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Create an account
              </button>
            
          </div>

      </div></form>
    



                </div>
            </div>     
    );
};

export default LoginForm;