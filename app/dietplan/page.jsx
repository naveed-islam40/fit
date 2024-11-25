import React from 'react';
import Link from 'next/link';
import Testimonials from '../testinomial/page';
import { FaDumbbell, FaWater, FaWeightHanging, FaCookieBite } from 'react-icons/fa';

const WeightLossPlan = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">

        {/* Main Heading Section */}
        <div className="text-center bg-gradient-to-r from-[#f6d365] to-[#fda085] py-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-white mb-4">Achieve Your Weight Loss Goals with Our Expert Nutrition Plans</h1>
          <p className="text-2xl text-white mb-6">Custom diet plans designed to support your weight loss journey.</p>
        </div>

        {/* Why Weight Loss Matters Section */}
        <div className="text-center mt-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Why Weight Loss Matters</h2>
          <p className="text-lg text-gray-700 mx-auto max-w-2xl">Losing weight can enhance overall health, boost energy levels, and reduce the risk of chronic diseases. Our plans are crafted to help you shed pounds safely and sustainably.</p>
        </div>

        {/* Diet Plans Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-semibold mb-6 text-center text-[#e09145]">Our Weight Loss Diet Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Low-Calorie Meal Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_#e09145] transition duration-300 hover:translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-[#e09145]">Low-Calorie Meal Plan</h3>
              <p className="text-lg mb-4 text-gray-600">A structured plan with calorie-controlled meals and snacks to help you create a calorie deficit and lose weight effectively.</p>
              <Link href="/LowCaloriesMealPlan">
                <button className="bg-[#e09145] text-white py-2 px-4 rounded-md hover:bg-[#cc7f3b] transition duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Balanced Diet Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_#e09145] transition duration-300 hover:translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-[#e09145]">Balanced Diet Plan</h3>
              <p className="text-lg mb-4 text-gray-600">Focuses on balanced nutrition to support healthy weight loss while ensuring you get all necessary nutrients.</p>
              <Link href="/BalancedDietPlan">
                <button className="bg-[#e09145] text-white py-2 px-4 rounded-md hover:bg-[#cc7f3b] transition duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>

            {/* High-Protein Diet Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_#e09145] transition duration-300 hover:translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-[#e09145]">High-Protein Diet Plan</h3>
              <p className="text-lg mb-4 text-gray-600">Emphasizes protein-rich foods to help preserve muscle mass while losing weight.</p>
              <Link href="/HighProteinDietPlan">
                <button className="bg-[#e09145] text-white py-2 px-4 rounded-md hover:bg-[#cc7f3b] transition duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Effective Weight Loss Tips Section */}
        <div className="mt-12 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="/Health.png" // Replace with your image path
              alt="Weight Loss Tips"
              className="w-1/2 h-auto object-cover pl-2 md:pl-4"  // Adjusted to 50% width
            />
          </div>

          {/* Right Text Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Effective Weight Loss Tips</h2>
            <ul className="list-none text-xl text-gray-700"> {/* Increased text size */}
              <li className="mb-2 flex items-center">
                <FaDumbbell className="mr-2 text-[#e09145]" /> {/* Gym icon */}
                Eat smaller, frequent meals to keep your metabolism active.
              </li>
              <li className="mb-2 flex items-center">
                <FaWater className="mr-2 text-[#e09145]" /> {/* Water icon */}
                Focus on high-fiber foods to stay full longer.
              </li>
              <li className="mb-2 flex items-center">
                <FaWeightHanging className="mr-2 text-[#e09145]" /> {/* Strength training icon */}
                Incorporate regular physical activity into your routine.
              </li>
              <li className="mb-2 flex items-center">
                <FaCookieBite className="mr-2 text-[#e09145]" /> {/* Snack icon */}
                Stay hydrated and limit high-calorie beverages.
              </li>
            </ul>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Success Stories</h2>
          <p className="text-lg text-gray-700 mx-auto mb-6 max-w-2xl">
          Discover how our clients have successfully achieved their weight loss goals using our diet plans.
          </p>
          {/* Add a border or highlight behind the testimonials */}
          <div className="border-t border-gray-300 mt-6 pt-4">
            <Testimonials />
          </div>
        </div>

        {/* Final Call to Action Section */}
        {/* <div className="text-center mt-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Ready to Start Your Weight Loss Journey?</h2>
          <Link href="/get-started" className="inline-block bg-[#e09145] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#d68330] hover:shadow-lg transition duration-300">
            Get Started
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default WeightLossPlan;
