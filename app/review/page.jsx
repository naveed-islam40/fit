// "use client";
// import { useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import FileBase from "react-file-base64"

// const TestimonialForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     jobTitle: "",
//     message: "",
//     image: "",
//     rating: 1,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.rating < 1 || formData.rating > 5) {
//       toast.error("Rating must be between 1 and 5.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/testimonials", formData);
//       toast.success("Testimonial submitted successfully!");
//       setFormData({
//         name: "",
//         jobTitle: "",
//         message: "",
//         image: "",
//         rating: 1,
//       });
//     } catch (error) {
//       toast.error("There was an error submitting your testimonial.");
//       console.error("Error submitting testimonial:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Submit Your Testimonial</h2>
//         <div className="flex flex-wrap md:flex-nowrap items-stretch">
//           {/* Form Section */}
//           <div className="w-full md:w-1/2 p-4 flex items-center">
//             <div className="w-full">
//               <form onSubmit={handleSubmit} className="p-6 border rounded-lg border-gray-300">
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Name:</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700">Job Title:</label>
//                   <input
//                     type="text"
//                     name="jobTitle"
//                     value={formData.jobTitle}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700">Message:</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     required
//                   ></textarea>
//                   </div>

//                 <div className="mb-4">
//   <label className="block text-gray-700">Image URL (optional):</label>

//   {/* Input for any other value */}
//   <input className="mb-3" controlId="exampleForm.ControlInput4" />

//   {/* FileBase component for handling the file input */}
//   <FileBase
//     type="file"
//     multiple={false}
//     onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
//   />
// </div>

//                 {/* <div className="mb-4">
//                   <label className="block text-gray-700">Image URL (optional):</label>
//                   <input
//                     type="text"
//                     name="image"
//                     value={formData.image}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                   />
//                 </div> */}

//                 <div className="mb-4">
//                   <label className="block text-gray-700">Rating (1 to 5):</label>
//                   <input
//                     type="number"
//                     name="rating"
//                     value={formData.rating}
//                     onChange={handleChange}
//                     min="1"
//                     max="5"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#E09145] text-white px-4 py-2 rounded-lg hover:bg-[#d07d33] border border-gray-300"
//                 >
//                   Submit Testimonial
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-1/2 p-4 flex items-center">
//             <img
//               src="/Review1.png"
//               alt="Testimonial Image"
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default TestimonialForm;


"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileBase from "react-file-base64";
import Link from "next/link";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    message: "",
    image: "",
    rating: 1,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in
  const [showSignupModal, setShowSignupModal] = useState(false); // Track modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setShowSignupModal(true); // Show the signup modal if not logged in
      return;
    }

    if (formData.rating < 1 || formData.rating > 5) {
      toast.error("Rating must be between 1 and 5.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/testimonials", formData);
      toast.success("Testimonial submitted successfully!");
      setFormData({
        name: "",
        jobTitle: "",
        message: "",
        image: "",
        rating: 1,
      });
    } catch (error) {
      toast.error("There was an error submitting your testimonial.");
      console.error("Error submitting testimonial:", error);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowSignupModal(false); // Close the modal after successful login/signup
    toast.success("You are now logged in!");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Submit Your Testimonial
        </h2>
        <div className="flex flex-wrap md:flex-nowrap items-stretch">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4 flex items-center">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="p-6 border rounded-lg border-gray-300">
                <div className="mb-4">
                  <label className="block text-gray-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Job Title:</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Image URL (optional):</label>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Rating (1 to 5):</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E09145] text-white px-4 py-2 rounded-lg hover:bg-[#d07d33] border border-gray-300"
                >
                  Submit Testimonial
                </button>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4 flex items-center">
            <img
              src="/Review1.png"
              alt="Testimonial Image"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <ToastContainer />

     {/* Signup Modal */}
{showSignupModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
      <h2 className="text-2xl font-extrabold mb-4 text-gray-800">
        Welcome to Our Website!
      </h2>
      <p className="mb-6 text-gray-600">
        Please sign up or log in to submit your testimonial and share your experience with us.
      </p>
      <div className="flex flex-col gap-4">
        <Link href="/Login">
          <button
            className="w-full bg-[#E09145] text-white font-medium text-lg px-6 py-3 rounded-full shadow-lg hover:bg-[#d07d33] hover:shadow-xl transition duration-200"
          >
            Log In
          </button>
        </Link>
        <Link href="/Register">
          <button
            className="w-full bg-[#E09145] text-white font-medium text-lg px-6 py-3 rounded-full shadow-lg hover:bg-[#d07d33] hover:shadow-xl transition duration-200"
          >
            Sign Up
          </button>
        </Link>
        <button
          onClick={() => setShowSignupModal(false)}
          className="w-full bg-gray-100 text-gray-700 font-medium text-lg px-6 py-3 rounded-full shadow hover:bg-gray-200 hover:shadow-md transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default TestimonialForm;

