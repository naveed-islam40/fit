"use client";

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { MdArrowBack } from 'react-icons/md'; // Import the back icon
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HighProteinDietPlan = () => {
  const [dietPlans, setDietPlans] = useState([]);
  const dailyCalories = "2,500 to 3,000 calories"; // You can adjust this if needed
  const sliderRef = useRef(null); // Create a ref for the slider

  useEffect(() => {
    const fetchDietPlans = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/diet-plans");
        if (Array.isArray(response.data)) {
          setDietPlans(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching diet plans:", error);
      }
    };

    fetchDietPlans();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: false, // Disable default arrows since we will add custom buttons
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext(); // Call slickNext method on slider instance
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev(); // Call slickPrev method on slider instance
  };

  const handleBackClick = () => {
    // Define the behavior for the back button here
    window.history.back(); // This will take the user to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
      <section className="w-full max-w-3xl px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <button onClick={handleBackClick} className="flex items-center px-2 py-1 text-[#E09145] hover:text-[#E09145] mr-2">
              <MdArrowBack className="mr-1" /> Back
            </button>
            <h2 className="text-4xl font-bold text-[#E09145]">High-Protein Diet Plan</h2>
          </div>
          <p className="text-lg mb-6">
            For effective weight gain, aim for a daily caloric intake of <strong>{dailyCalories}</strong>.
          </p>
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {dietPlans.map((plan, index) => (
            <div key={index} className="p-6">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center mx-auto 
                              shadow-[0px_4px_20px_rgba(224,145,69,0.4)] min-h-[400px] w-full max-w-full 
                              transition duration-300 ease-in-out hover:shadow-[0px_0px_30px_rgba(224,145,69,0.7)]">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.day}</h3>
                <div className="space-y-4">
                  {plan.meals.map((meal, i) => (
                    <div key={i} className="flex flex-col items-center space-y-2">
                      <div className="font-semibold text-lg text-[#E09145]">{meal.meal}</div>
                      <div className="text-gray-600">{meal.description} ({meal.calories} calories)</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Custom Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button 
            onClick={goToPrevSlide} 
            className="px-4 py-2 bg-[#E09145] text-white rounded"
          >
            Prev
          </button>
          <button 
            onClick={goToNextSlide} 
            className="px-4 py-2 bg-[#E09145] text-white rounded"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default HighProteinDietPlan;
