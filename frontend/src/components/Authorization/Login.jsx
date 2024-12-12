import {useState} from 'react';
import { Link } from 'react-router-dom';

function LogingUser() {
    const [credentials,setCreds] = useState({
        email:'',
        password:'',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setCreds({
          ...credentials,
          [name]: value,
        });
      };
     const handleClickLogin = () => {
        
     };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-extrabold text-center text-gray-900">Welcome Back!</h1>
                <p className="text-sm text-center text-gray-600">
                    Login to access your account and start shopping.
                </p>
                <form className="space-y-4">
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
                            autoComplete="email"
                            required
                            value = {credentials.email}
                            onChange={handleChange}
                            placeholder="e.g. user@example.com"
                            className="w-full px-4 py-2 text-sm border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
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
                            required
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 text-sm border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    >
                        Login
                    </button>
                    <p className="text-sm text-center text-gray-600">
                    Don’t have an account ? <Link to={'/signup'}>Sign up</Link>
                </p>
                </form>
            </div>
        </div>
    );
}

export default LogingUser;
