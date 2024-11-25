"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: user.username,
        password: user.password
      });

      const { success, userData } = response.data;
      const { role } = userData;

      if (success) {
        toast.success('User Logged in Successfully');

        localStorage.setItem('isUserLoggedIn', true);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('id', userData._id);

        if (role === "admin") {
          router.push('/admin-dashboard');
        } else {
          router.push('/');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg">
        <form onSubmit={submitHandler}>
          {/* Left Arrow inside the form */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="text-[#E09145] hover:underline flex items-center"
            >
              <FiArrowLeft size={24} /> {/* Left Arrow Icon */}
            </button>
            <h1 className="text-3xl font-bold text-[#E09145] text-center flex-1">Login</h1>
            <span className="w-6" /> {/* Spacer for layout balance */}
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={changeHandler}
            required
            className="w-full p-3 mb-4 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
          />

          {/* Password Field */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={changeHandler}
              required
              className="relative w-full p-3 mb-4 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out pr-10"
            />
            <div
              className="absolute inset-y-0 right-3 top-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
          </div>

          {/* Forgot Password Link */}
          <p className="text-left text-base mb-6"> {/* Changed text-sm to text-base for ideal size */}
            <button
              onClick={() => router.push('/forget-password')}
              className="text-[#E09145] hover:underline transition duration-200 font-medium"
            >
              Forgot Password?
            </button>
          </p>


          <button className="w-full py-3 bg-[#E09145] text-white font-semibold rounded-lg hover:bg-[#C67D34] transition-colors duration-300">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          New here?{" "}
          <button
            onClick={() => router.push('/Register')}
            className="text-[#E09145] hover:underline transition duration-200"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
