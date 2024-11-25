"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/forgot-password", { email });
      if (response.data.success) {
        toast.success("Password reset link sent to your email.");
        // setTimeout(() => {
        //   router.push("/Login");  // Navigate after the toast
        // }, 3000); // 3 seconds delay
      } else {
        toast.error("Email not found.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <ToastContainer />
      <div className="w-full max-w-md p-8">
        <div className="bg-gray-100 shadow-lg rounded-lg p-8">
          <form onSubmit={submitHandler}>
            <h1 className="text-3xl font-bold text-center mb-6">Forgot Password</h1>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={changeHandler}
              required
              className="w-full p-3 mb-4 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#E09145] text-white font-semibold rounded-lg hover:bg-[#C67D34] transition-colors duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>
          <p className="text-center mt-4">
            Remembered your password?{" "}
            <button
              onClick={() => router.push("/Login")}
              className="text-[#E09145] hover:underline transition duration-200"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

