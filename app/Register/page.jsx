"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (user.password !== user.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      await axios.post('http://localhost:5000/register', {
        username: user.username,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword
      });
      toast.success('User Registered Successfully');
      router.push('/Login');
    } catch (error) {
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg mb-8">
        <form onSubmit={submitHandler}>
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={() => router.push('/Login')}
              className="text-[#E09145] hover:underline"
            >
              <FiArrowLeft size={24} />
            </button>
            <h1 className="text-3xl font-bold text-[#E09145] flex-1 text-center">Sign Up</h1> {/* Updated color */}
            <span className="w-6" />
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={changeHandler}
            required
            className="w-full p-3 mb-4 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={changeHandler}
              required
              className="w-full p-3 mb-4 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out pr-10"
            />
            <div
              className="absolute inset-y-4 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
          </div>
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={changeHandler}
              required
              className="w-full p-3 mb-6 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out pr-10"
            />
            <div
              className="absolute inset-y-4 right-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
          </div>
          <button className="w-full py-3 bg-[#E09145] text-white font-semibold rounded-lg hover:bg-[#C67D34] transition-colors duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          New here?{" "}
          <button
            onClick={() => router.push('/Login')}
            className="text-[#E09145] hover:underline transition duration-200"
          >
            Login
          </button>
          </p>
      </div>
    </div>
  );
};

export default Register;
