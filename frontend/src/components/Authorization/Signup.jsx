import React, { useState } from 'react';
import validationFormObject from '../../validation.js';
import {Link} from 'react-router-dom';


function SignupUser() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        file: '',
      });
      const [error, setError] = useState('');
      
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setData({
            ...data,
            [name]:value,
        });
    };
    
    const handleSubmit = () => {
        const NameV = validationFormObject.validteName(data.name);
        const EmailV = validationFormObject.validateEmail(data.email)
        const PassV = validationFormObject.validatePass(data.password)
    
        if (typeof NameV == 'string' && NameV.length > 1) {
                return setError(NameV);
              }
        if (typeof EmailV == 'string' && EmailV.length > 2) {
                return setError(EmailV);
              }
        if (typeof PassV == 'string' && PassV.length > 2) {
                return setError(PassV);
              }
        }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-extrabold text-center text-gray-900">Create an Account</h1>
                <p className="text-sm text-center text-gray-600">
                    Sign up to get started with your shopping journey.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            value = {data.name}
                            onChange={handleChange}
                            placeholder="Choose a username"
                            className="w-full px-4 py-2 text-sm border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value = {data.email}
                            onChange={handleChange}
                            placeholder="e.g. user@example.com"
                            className="w-full px-4 py-2 text-sm border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value = {data.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full px-4 py-2 text-sm border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="file"
                            className="block text-gray-700 font-medium mb-2"
                        >
                        Upload File
                        </label>
                        <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".jpg , .jpeg , .png"
                        onChange={handleChange}
                        className="w-full text-gray-700 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                    >
                        Sign Up
                    </button>
                    <p className="text-center">
                        Already have an account ? <Link to={'/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignupUser;
