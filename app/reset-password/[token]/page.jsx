// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";
// import { useParams } from "next/navigation";

// const ResetPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { token } = useParams(); // Get token from dynamic route
//   const router = useRouter();

//   useEffect(() => {
//     if (!token) {
//       toast.error("Token is missing or invalid.");
//       setTimeout(() => {
//         router.push("/"); // Redirect to login if no token
//       }, 3000);
//     }
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "password") setPassword(value);
//     if (name === "confirmPassword") setConfirmPassword(value);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/reset-password", {
//         token,
//         password,
//       });
//       console.log("API Response:", response.data); // Debugging API response
//       if (response.data.success) {
//         toast.success("Password reset successfully.");
//         // setTimeout(() => {
//         //   router.push("/"); // Redirect to login after success
//         // }, 2000);
//       } else {
//         toast.error(response.data.msg || "Error resetting password.");
//       }
//     } catch (error) {
//       console.error("API Error:", error); // Debugging API error
//       toast.error("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
//       <ToastContainer />
//       <div className="w-full max-w-md p-8">
//         <div className="bg-gray-100 shadow-lg rounded-lg p-8">
//           <form onSubmit={submitHandler}>
//             <h1 className="text-3xl font-bold text-center mb-6">Reset Password</h1>
//             <input
//               type="password"
//               name="password"
//               placeholder="New Password"
//               value={password}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm New Password"
//               value={confirmPassword}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
//             />
//             <button
//               type="submit"
//               className="w-full py-3 bg-[#E09145] text-white font-semibold rounded-lg hover:bg-[#C67D34] transition-colors duration-300"
//               disabled={loading}
//             >
//               {loading ? "Resetting..." : "Reset Password"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token } = useParams(); // Get token from dynamic route
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing or invalid.");
      setTimeout(() => {
        router.push("/"); // Redirect to login if no token
      }, 3000);
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/reset-password", {
        token,
        password,
      });
      console.log("API Response:", response.data); // Debugging API response
      if (response.data.success) {
        toast.success("Password reset successfully.");
        setTimeout(() => {
          router.push("/"); // Redirect to login after success
        }, 2000);
      } else {
        toast.error(response.data.msg || "Error resetting password.");
      }
    } catch (error) {
      console.error("API Error:", error); // Debugging API error
      toast.error("An error occurred. Please try again later.");
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
            <h1 className="text-3xl font-bold text-center mb-6">Reset Password</h1>
            {/* New Password Field */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="New Password"
                value={password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {/* Confirm Password Field */}
            <div className="relative mb-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#E09145] text-white font-semibold rounded-lg hover:bg-[#C67D34] transition-colors duration-300"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
