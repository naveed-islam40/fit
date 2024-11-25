"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js for navigation
import styles from "../../styles/bmi-module.css";
import Navbar from "../components/Navbar";

const Bmi = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");
  const [mounted, setMounted] = useState(false); // Ensure the component is mounted
  const router = useRouter(); // useRouter hook for navigation

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component is mounted
  }, []);

  const reload = () => {
    window.location.reload();
  };

  const handleCalculations = (e) => {
    e.preventDefault();

    // Convert input values to numbers
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Check for valid input
    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid numbers for weight and height.");
      return;
    }

    // Convert height from cm to meters
    const heightInMeters = heightNum / 100;

    // Calculate BMI
    const bmiValue = weightNum / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2)); // Set BMI with 2 decimal points

    // Set message and options based on BMI value
    if (bmiValue < 18.5) {
      setMsg("You're underweight. We are also offering Nutrition Plans.");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMsg("You're healthy.");
    } else {
      setMsg("You're overweight. We are also offering Diet Plans.");
    }
  };

  const navigateToPlan = () => {
    if (bmi < 18.5) {
      router.push("/nutrition-plan"); // Navigate to Nutrition Plan page
    } else if (bmi > 24.9) {
      router.push("/dietplan"); // Navigate to Diet Plan page
    }
  };

  const handleButtonClick = () => {
    if (!isUserLoggedIn()) {
      // Navigate to signup if user is not logged in
      router.push("/Register");
    } else {
      // Navigate to the appropriate plan page if user is logged in
      navigateToPlan();
    }
  };

  const isUserLoggedIn = () => {
    // Replace this logic with your actual authentication check
    const user = localStorage.getItem("user"); // Example: Check if user is stored in localStorage
    return user !== null;
  };

  if (!mounted) return null; // Ensure the component doesn't render before mounting

  return (
    <div>
      <Navbar />
      <div className="bmi-app">
        <div className="bmi-container">
          <div className="bmi-form-section">
            <h1 className="bmi-title">BMI Calculator</h1>
            <form onSubmit={handleCalculations}>
              <div>
                <label className="bmi-labels">Age:</label>
                <input
                  className="bmi-input"
                  placeholder="Age..."
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <label className="bmi-labels">Weight:</label>
                <input
                  className="bmi-input"
                  placeholder="Enter weight in kilograms (kg)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label className="bmi-labels">Height:</label>
                <input
                  className="bmi-input"
                  placeholder="Enter height in centimeters (cm)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="bmi-button-group">
                <button className="bmi-btn" type="submit">
                  Calculate
                </button>
                <button className="bmi-btn-reset" type="button" onClick={reload}>
                  Reset
                </button>
              </div>

              <div className="bmi-result">
                <h3>Age: {age}</h3>
                <h3>Your BMI is: {bmi}</h3>
                <p className="bmi-p-msg">{msg}</p>

                {/* Conditional rendering based on BMI */}
                {bmi && (
                  <>
                    {bmi < 18.5 && (
                      <div className="mt-4 p-4 bg-[#fbe9d7] border border-[#e09145] rounded-md text-center">
                        <p className="text-lg font-medium text-[#e09145]">
                          We are also offering Nutrition Plans.
                        </p>
                        <button
                          className="mt-2 bg-[#e09145] text-white px-4 py-2 rounded-md hover:bg-[#d07d39] focus:outline-none focus:ring-2 focus:ring-[#e09145] focus:ring-offset-2"
                          type="button"
                          onClick={handleButtonClick}
                        >
                          Nutrition Plan
                        </button>
                      </div>
                    )}
                    {bmi > 24.9 && (
                      <div className="mt-4 p-4 bg-[#fbe9d7] border border-[#e09145] rounded-md text-center">
                        <p className="text-lg font-medium text-[#e09145]">
                          We are also offering Diet Plans.
                        </p>
                        <button
                          className="mt-2 bg-[#e09145] text-white px-4 py-2 rounded-md hover:bg-[#d07d39] focus:outline-none focus:ring-2 focus:ring-[#e09145] focus:ring-offset-2"
                          type="button"
                          onClick={handleButtonClick}
                        >
                          Diet Plan
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>

          <div className="bmi-image-section">
            <img src={"bmi-calculate.png"} alt="Fitness" className="bmi-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
