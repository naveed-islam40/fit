import { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [timeElapsed, setTimeElapsed] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(timer); // Cleanup on unmount or when isRunning changes
    }, [isRunning]);

    const startStopwatch = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setTimeElapsed(0);
    };

    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;

    return (
        <div className="flex flex-col items-center justify-center text-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8">
                {/* <h1 className="text-4xl font-bold text-gray-800 mb-6">Stopwatch</h1> */}
                <div className="text-6xl font-extrabold text-[#E09145] mb-8">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>

                <div className="flex space-x-4">
                    <button
                        onClick={startStopwatch}
                        className="bg-[#E09145] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Start
                    </button>
                    <button
                        onClick={stopStopwatch}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Stop
                    </button>
                    <button
                        onClick={resetStopwatch}
                        className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch;


// import { useState, useEffect } from 'react';

// const Timer = ({ workoutDuration }) => {
//     const [timeLeft, setTimeLeft] = useState(workoutDuration * 60); // Convert minutes to seconds
//     const [isRunning, setIsRunning] = useState(false);

//     useEffect(() => {
//         let timer;
//         if (isRunning && timeLeft > 0) {
//             timer = setInterval(() => {
//                 setTimeLeft((prevTime) => prevTime - 1);
//             }, 1000);
//         }

//         if (timeLeft <= 0) {
//             setIsRunning(false); // Stop timer when it reaches zero
//         }

//         return () => clearInterval(timer); // Cleanup on component unmount or effect re-run
//     }, [isRunning, timeLeft]);

//     const startTimer = () => {
//         if (!isRunning && timeLeft > 0) {
//             setIsRunning(true);
//         }
//     };

//     const stopTimer = () => {
//         setIsRunning(false);
//     };

//     const resetTimer = () => {
//         setTimeLeft(workoutDuration * 60); // Reset to initial workout duration
//         setIsRunning(false); // Ensure the timer stops when reset
//     };

//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;

//     return (
//         <div className="flex flex-col items-center">
//             <div className="text-3xl font-bold mb-4">
//                 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//             </div>

//             <div className="flex space-x-4">
//                 <button
//                     onClick={startTimer}
//                     className="bg-[#E09145] hover:bg-orange-600 text-white py-2 px-4 rounded"
//                 >
//                     Start
//                 </button>
//                 <button
//                     onClick={stopTimer}
//                     className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
//                 >
//                     Stop
//                 </button>
//                 <button
//                     onClick={resetTimer}
//                     className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded"
//                 >
//                     Reset
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Timer;

