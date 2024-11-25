"use client"; // This tells Next.js that this component should be rendered on the client side

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Fullname: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);
  
    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, message }),
      });
  
      const result = await response.json();
      console.log('Server Response:', result);
  
      if (result.success) {
        alert('Message sent successfully!');
        setFullname('');
        setmail('');
        setMessage('');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
      <form  onSubmit={handleSubmit}>
      
        <input
          className="w-full h-12 text-gray-600 placeholder-grey-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          type="text"
          id="fullname"
          value={fullname} // Controlled input
          onChange={(e) => setFullname(e.target.value)} // Update state
          placeholder="Name"
        />
        <input
          className="w-full h-12 text-gray-600 placeholder-grey-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          type="email"
          id="email"
          value={email} // Controlled input
          onChange={(e) => setmail(e.target.value)} // Update state
          placeholder="name@gmail.com"
        />
        <textarea
          className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10"
          id="message"
          value={message} // Controlled input
          onChange={(e) => setMessage(e.target.value)} // Update state
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-opacity-80 bg-customColor shadow-sm"
        >
          Send
        </button>
      </form>
    </>
  );
}

