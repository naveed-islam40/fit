import React from 'react';
import Link from 'next/link';
import Testimonials from '../testinomial/page';
import { FaDumbbell, FaWater, FaWeightHanging, FaCookieBite } from 'react-icons/fa';

const NutritionPlan = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">

        {/* Main Heading Section */}
        <div className="text-center bg-gradient-to-r from-[#f6d365] to-[#fda085] py-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-white mb-4">Boost Your Weight with Our Tailored Nutrition Plans</h1>
          <p className="text-2xl text-white mb-6">Personalized diet plans to help you achieve your weight gain goals.</p>

          {/* <Link href="/get-started" className="inline-block bg-white text-[#e09145] py-3 px-8 rounded-lg shadow-md hover:bg-[#fda085] hover:text-white hover:shadow-lg transition duration-300">
            Get Started
          </Link> */}
        </div>

        {/* Why Weight Gain Matters Section */}
        <div className="text-center mt-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Why Weight Gain Matters?</h2>
          <p className="text-lg text-gray-700 mx-auto max-w-2xl">Weight gain can be crucial for improving overall health and achieving fitness goals. Our plans focus on providing balanced nutrition to help you gain weight in a healthy and sustainable way.</p>
        </div>

        {/* Diet Plans Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-semibold mb-6 text-center text-[#e09145]">Our Weight Gain Diet Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* High-Calorie Meal Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_#e09145] transition duration-300 hover:translate-y-2">
              <h3 className="text-2xl font-semibold mb-4">High-Calorie Meal Plan</h3>
              <p className="text-lg mb-4 text-gray-600">Detailed plan with high-calorie meals and snacks to help you increase your calorie intake effectively.</p>
              <Link href="/HighCalorieMealPlan">
                <button className="bg-[#e09145] text-white py-2 px-4 rounded-md hover:bg-[#cc7f3b] transition duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Protein-Rich Diet Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_#e09145] transition duration-300 hover:translate-y-2">
              <h3 className="text-2xl font-semibold mb-4">Protein-Rich Diet Plan</h3>
              <p className="text-lg mb-4 text-gray-600">Focus on protein-rich foods to support muscle growth and weight gain.</p>
              <Link href="/ProtienDietPlan">
                <button className="bg-[#e09145] text-white py-2 px-4 rounded-md hover:bg-[#cc7f3b] transition duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Balanced Diet Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_#e09145] transition duration-300 hover:translate-y-2">
              <h3 className="text-2xl font-semibold mb-4">Balanced Diet Plan</h3>
              <p className="text-lg mb-4 text-gray-600">A well-rounded approach to healthy weight gain with balanced nutrition.</p>
              <Link href="/BalanceDietPlan">
                <button className="bg-[#e09145] text-white py-2 px-4 rounded-md hover:bg-[#cc7f3b] transition duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>


          </div>
        </div>

        {/* Weight Gain Tips Section */}
        <div className="mt-12 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="/Health.png" // Replace with your image path
              alt="Weight Gain Tips"
              className="w-1/2 h-auto object-cover pl-2 md:pl-4"  // Adjusted to 50% width
            />
          </div>

          {/* Right Text Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Effective Weight Gain Tips</h2>
            <ul className="list-none text-xl text-gray-700"> {/* Increased text size */}
              <li className="mb-2 flex items-center">
                <FaDumbbell className="mr-2 text-[#e09145]" /> {/* Gym icon */}
                Focus on nutrient-rich foods, not just high-calorie options.
              </li>
              <li className="mb-2 flex items-center">
                <FaWater className="mr-2 text-[#e09145]" /> {/* Water icon */}
                Stay hydrated but avoid excessive water intake before meals.
              </li>
              <li className="mb-2 flex items-center">
                <FaWeightHanging className="mr-2 text-[#e09145]" /> {/* Strength training icon */}
                Combine strength training with your diet for muscle gain.
              </li>
              <li className="mb-2 flex items-center">
                <FaCookieBite className="mr-2 text-[#e09145]" /> {/* Snack icon */}
                Eat frequently and include calorie-dense snacks.
              </li>
            </ul>
          </div>
        </div>




        {/* Success Stories Section */}
        <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Success Stories</h2>
          <p className="text-lg text-gray-700 mx-auto mb-6 max-w-2xl">
            Read about how our nutrition plans have helped others achieve their weight gain goals.
          </p>
          {/* Add a border or highlight behind the testimonials */}
          <div className="border-t border-gray-300 mt-6 pt-4">
            <Testimonials />
          </div>
        </div>


        {/* Final CTA Section */}
        {/* <div className="text-center mt-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#e09145]">Ready to Start Your Journey?</h2>
          <Link href="/get-started" className="inline-block bg-[#e09145] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#fda085] hover:shadow-lg transition duration-300">
            Get Started
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default NutritionPlan;