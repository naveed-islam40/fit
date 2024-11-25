"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Link from 'next/link';

const ChestWorkOut = () => {
  const router = useRouter();
  const [workoutData, setWorkoutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/workouts');
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
    <div>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center p-6">
        {/* <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center text-[#E09145] hover:text-[#E09155] bg-transparent h-12"
        >
          <FaArrowLeft className="w-6 h-6 mr-2 transition-colors duration-300 hover:text-[#E09155] my-auto" />
        </button> */}

        <h1 className="text-3xl font-bold text-[#E09145] text-center mb-8">Shoulder & Chest Workout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutData.map((workout, index) => (
            <div key={workout.id || index} className="workout-card max-w-md bg-white shadow-md rounded-lg overflow-hidden">
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
                    pathname: '/chestworkout-timer', // Path to your timer page
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
    </div>
  );
};

export default ChestWorkOut;

