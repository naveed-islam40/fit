"use client"; // Ensure the component runs on the client side

import { useSearchParams } from 'next/navigation'; // Use useSearchParams for query params
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Timer from '../components/Timer'; 
import { FaArrowLeft } from 'react-icons/fa';

const WorkoutTimer = () => {
  const searchParams = useSearchParams(); // Access query parameters using useSearchParams
  
  const [workout, setWorkout] = useState({
    img: '',
    name: '',
    target: '',
    duration: '',
    rest: '',
    sets: '',
    reps: '',
  });
  

  // Set workout data when the query params are available
  useEffect(() => {
  if (searchParams) {
    setWorkout({
      img: searchParams.get('img') || '',
      name: searchParams.get('name') || '',
      target: searchParams.get('target') || '',
      duration: parseFloat(searchParams.get('duration')) || 0, // Convert to number
      rest: searchParams.get('rest') || '',
      sets: searchParams.get('sets') || '',
      reps: searchParams.get('reps') || '',
    });
  }
}, [searchParams]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center  m-14"> {/* Removed top and bottom margins */}
        <div className="flex flex-col md:flex-row p-6 space-x-6 max-w-6xl w-full bg-white rounded-3xl shadow-xl m-0"> {/* Removed top and bottom margins */}
          {/* Left Container - Workout Image */}
          <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
            <img 
              src={workout.img} 
              alt={`${workout.name} GIF`} 
              className="w-full h-full object-cover transform transition-all duration-500 " 
            />
          </div>

          {/* Right Container - Workout Details */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-extrabold text-[#E09145] tracking-wide">{workout.name}</h1>
            <p className="text-xl text-black"><strong className="font-semibold">Target:</strong> {workout.target}</p>
            <p className="text-xl text-black"><strong className="font-semibold">Duration:</strong> {workout.duration}</p>
            <p className="text-xl text-black"><strong className="font-semibold">Rest:</strong> {workout.rest}</p>

            <div className="space-y-2">
              <p className="text-xl text-black"><strong className="font-semibold">Sets:</strong> {workout.sets}</p>
              <p className="text-xl text-black"><strong className="font-semibold">Reps:</strong> {workout.reps}</p>
            </div>

            {/* Timer Component */}
            <div className="mt-6">
              <Timer workoutDuration={workout.duration} /> {/* Pass workout duration to timer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTimer;
// done code
// "use client"; // Ensure the component runs on the client side

// import { useSearchParams } from 'next/navigation'; // Use useSearchParams for query params
// import { useState, useEffect } from 'react';
// import Navbar from "../components/Navbar";
// import Timer from '../components/Timer'; 
// import { FaArrowLeft } from 'react-icons/fa';

// const WorkoutTimer = () => {
//   const searchParams = useSearchParams(); // Access query parameters using useSearchParams
  
//   const [workout, setWorkout] = useState({
//     img: '',
//     name: '',
//     target: '',
//     duration: '',
//     rest: '',
//     sets: '',
//     reps: '',
//   });
  

//   // Set workout data when the query params are available
//   useEffect(() => {
//   if (searchParams) {
//     setWorkout({
//       img: searchParams.get('img') || '',
//       name: searchParams.get('name') || '',
//       target: searchParams.get('target') || '',
//       duration: parseFloat(searchParams.get('duration')) || 0, // Convert to number
//       rest: searchParams.get('rest') || '',
//       sets: searchParams.get('sets') || '',
//       reps: searchParams.get('reps') || '',
//     });
//   }
// }, [searchParams]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center  m-14"> {/* Removed top and bottom margins */}
//         <div className="flex flex-col md:flex-row p-6 space-x-6 max-w-6xl w-full bg-white rounded-3xl shadow-xl m-0"> {/* Removed top and bottom margins */}
//           {/* Left Container - Workout Image */}
//           <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
//             <img 
//               src={workout.img} 
//               alt={`${workout.name} GIF`} 
//               className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110" 
//             />
//           </div>

//           {/* Right Container - Workout Details */}
//           <div className="flex-1 space-y-6">
//             <h1 className="text-4xl font-extrabold text-[#E09145] tracking-wide">{workout.name}</h1>
//             <p className="text-xl text-black"><strong className="font-semibold">Target:</strong> {workout.target}</p>
//             <p className="text-xl text-black"><strong className="font-semibold">Duration:</strong> {workout.duration}</p>
//             <p className="text-xl text-black"><strong className="font-semibold">Rest:</strong> {workout.rest}</p>

//             <div className="space-y-2">
//               <p className="text-xl text-black"><strong className="font-semibold">Sets:</strong> {workout.sets}</p>
//               <p className="text-xl text-black"><strong className="font-semibold">Reps:</strong> {workout.reps}</p>
//             </div>

//             {/* Timer Component */}
//             <div className="mt-6">
//               <Timer workoutDuration={workout.duration} /> {/* Pass workout duration to timer */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkoutTimer;
// "use client"; // Ensure the component runs on the client side

// import { useSearchParams } from 'next/navigation'; // Use useSearchParams for query params
// import { useState, useEffect } from 'react';
// import Navbar from "../components/Navbar";
// import Timer from '../components/Timer'; // Assuming you have a Timer component or logic for the timer

// const WorkoutTimer = () => {
//   const searchParams = useSearchParams(); // Access query parameters using useSearchParams
  
//   const [workout, setWorkout] = useState({
//     img: '',
//     name: '',
//     target: '',
//     duration: '',
//     rest: '',
//     sets: '',
//     reps: '',
//   });

//   // Set workout data when the query params are available
//   useEffect(() => {
//     if (searchParams) {
//       setWorkout({
//         img: searchParams.get('img') || '',
//         name: searchParams.get('name') || '',
//         target: searchParams.get('target') || '',
//         duration: searchParams.get('duration') || '',
//         rest: searchParams.get('rest') || '',
//         sets: searchParams.get('sets') || '',
//         reps: searchParams.get('reps') || '',
//       });
//     }
//   }, [searchParams]); // Re-run this effect when searchParams changes

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center  m-14"> {/* Removed top and bottom margins */}
//         <div className="flex flex-col md:flex-row p-6 space-x-6 max-w-6xl w-full bg-white rounded-3xl shadow-xl m-0"> {/* Removed top and bottom margins */}
//           {/* Left Container - Workout Image */}
//           <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
//             <img 
//               src={workout.img} 
//               alt={`${workout.name} GIF`} 
//               className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110" 
//             />
//           </div>

//           {/* Right Container - Workout Details */}
//           <div className="flex-1 space-y-6">
//             <h1 className="text-4xl font-extrabold text-[#E09145] tracking-wide">{workout.name}</h1>
//             <p className="text-xl text-black"><strong className="font-semibold">Target:</strong> {workout.target}</p>
//             <p className="text-xl text-black"><strong className="font-semibold">Duration:</strong> {workout.duration}</p>
//             <p className="text-xl text-black"><strong className="font-semibold">Rest:</strong> {workout.rest}</p>

//             <div className="space-y-2">
//               <p className="text-xl text-black"><strong className="font-semibold">Sets:</strong> {workout.sets}</p>
//               <p className="text-xl text-black"><strong className="font-semibold">Reps:</strong> {workout.reps}</p>
//             </div>

//             {/* Timer Component */}
//             <div className="mt-6">
//               <Timer workoutDuration={workout.duration} /> {/* Pass workout duration to timer */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
