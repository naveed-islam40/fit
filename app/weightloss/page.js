"use client"; // Ensures the component runs on the client side

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter
import Link from 'next/link'; // Import Link from Next.js

const WeightLossWorkOut = () => {
  const router = useRouter(); // Initialize useRouter
  const [workoutData, setWorkoutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/weightloss-workouts');
        setWorkoutData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching workout data:', error);
        setLoading(false);
      }
    };

    fetchWorkoutData();
  }, []);

  if (loading) {
    return <div>Loading workout data...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-[#E09145] text-center mb-8">Weight Loss Workout</h1>

      <div className="mb-6 max-w-2xl text-center">
        {/* Optional description can go here */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutData.map((workout, index) => (
          <div key={index} className="workout-card max-w-md bg-white shadow-md rounded-lg overflow-hidden">
            <div className="workout-image">
              <img 
                src={workout.img} 
                alt={`${workout.name} GIF`} 
                className="w-80 h-80 object-cover" 
              />
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{workout.name}</h2>
              <p className="mt-2 text-gray-600">Perform {workout.sets} sets of {workout.reps} reps.</p>
              <ul className="mt-3 text-gray-600">
                <li><strong>Target:</strong> {workout.target}</li>
                <li><strong>Duration:</strong> {workout.duration}</li>
                <li><strong>Rest:</strong> {workout.rest}</li>
              </ul>
            </div>

            <div className="px-4 pb-4">
              <Link
                href={{
                  pathname: '/workout-timer', // Path to your timer page
                  query: workout, // Pass workout data as query parameters
                }}
                className="bg-[#E09145] hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
              >
                Start Workout
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightLossWorkOut;
