import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const Exercisecards = () => {
  return (
    <div className="px-4 md:px-20 pt-10">
      <h2 className="text-4xl font-bold text-center mb-8">EXERCISES</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center">
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto border-4 border-transparent animate-border-glow">
          <div className="h-64">
            <img
              src={"Dumbbell exercise-amico.png"}
              alt="Weight Loss Workout"
              className="w-full h-full object-contain rounded-md mb-4 max-w-[200px] max-h-[200px] mx-auto"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Weight Loss Workout</h3>
          <p className="mb-4">
            A high-intensity workout plan designed to help you burn calories and shed extra pounds efficiently.
          </p>
          <Link href="/weightloss"> {/* Link to Weight Loss Workout page */}
            <button className="bg-[#E09145] text-white px-4 py-2 rounded-md">Start Workout</button>
          </Link>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto border-4 border-transparent animate-border-glow">
          <div className="h-64">
            <img
              src={"shoulderworkout.png"}
              alt="Chest and Shoulders Workout"
              className="w-full h-full object-cover rounded-md mb-4"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Chest and Shoulders Workout</h3>
          <p className="mb-4">
            A targeted workout routine focused on building upper body strength by combining exercises for the chest and shoulders.
          </p>
          <Link href="/chestWorkout"> {/* Link to Chest and Shoulders Workout page */}
            <button className="bg-[#E09145] text-white px-4 py-2 rounded-md">Start Workout</button>
          </Link>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto border-4 border-transparent animate-border-glow">
          <div className="h-64 flex items-center justify-center">
            <img
              src={"abs.png"}
              alt="ABS Workout"
              className="object-contain rounded-md mb-4 w-[300px] h-[300px]" // Set to fixed width and height
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">ABS Workout</h3>
          <p className="mb-4">
            A core-strengthening routine that focuses on building and toning your abdominal muscles for a sculpted midsection.
          </p>
          <Link href="/absworkout"> {/* Link to ABS Workout page */}
            <button className="bg-[#E09145] text-white px-4 py-2 rounded-md">Start Workout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exercisecards;
