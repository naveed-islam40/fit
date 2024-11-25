"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import Navbar from "../../../components/Navbar";
import { useParams, useRouter } from "next/navigation";

const PerformanceCalculator = () => {
  const [performanceData, setPerformanceData] = useState({
    calories: "",
    workoutHours: "",
    waterIntake: "",
    sleep: ""
  });

  const [performanceScore, setPerformanceScore] = useState(null);
  const [weightGain, setWeightGain] = useState(null);

  const {id} = useParams();
  const router = useRouter();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const parsedValue = value === '' ? 0 : parseFloat(value);
    setPerformanceData({ ...performanceData, [name]: parsedValue });
  };

  // [getting permofmance data]
  useEffect(() => {
    const fetchingPerformaceData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/performance/${id}`);
      if(res.status === 200){
        setPerformanceData(res.data);
      }
      } catch (error) {
        console.log(error);
      }
    }
    fetchingPerformaceData()
  }, [id])

  // [updating performance data]
  const updatePerformanceData = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:5000/api/performance/${id}`, performanceData);
      if(res.status === 200){
        toast.success("Performance data updated successfully");
        setPerformanceData(res.data);
        router.push('/dashboard')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const calculatePerformance = ({ calories, workoutHours, waterIntake, sleep }) => {
    const caloriesScore = (calories >= 1500 && calories <= 2500) ? 25 : 0;
    const workoutScore = workoutHours >= 1 && workoutHours <= 2 ? 25 : 0;
    const waterScore = waterIntake >= 2 && waterIntake <= 3 ? 25 : 0;
    const sleepScore = sleep >= 7 && sleep <= 9 ? 25 : 0;

    const totalScore = caloriesScore + workoutScore + waterScore + sleepScore;

    let weightGain = 0;
    if (calories > 2500) {
      weightGain += (calories - 2500) / 3500;
    }

    if (workoutHours >= 1) {
      weightGain -= workoutHours * 0.1;
    }

    return { totalScore, weightGain: Math.max(weightGain, 0).toFixed(2) };
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const { calories, workoutHours, waterIntake, sleep } = performanceData;
  
    if (!calories || !workoutHours || !waterIntake || !sleep) {
      toast.error("All fields are required");
      return;
    }
  
    // Calculate performance
    const { totalScore, weightGain } = calculatePerformance({
      calories: parseFloat(calories),
      workoutHours: parseFloat(workoutHours),
      waterIntake: parseFloat(waterIntake),
      sleep: parseFloat(sleep),
    });
  
    setPerformanceScore(totalScore);
    setWeightGain(weightGain);
    toast.success("Performance calculated successfully");
  
    // Get user ID from localStorage
    const userId = localStorage.getItem('id'); // Retrieve as a plain string
    console.log(userId);
    if (!userId) {
      toast.error("User ID not found in localStorage");
      return;
    }
  
    // Prepare the data for the POST request
    const performance = {
      userId,
      calories: parseFloat(calories),
      workoutHours: parseFloat(workoutHours),
      waterIntake: parseFloat(waterIntake),
      sleep: parseFloat(sleep),
      score: totalScore,
      weightGain: parseFloat(weightGain),
    };
  
    // Send a POST request to save the performance data in the backend
    try {
      await axios.post('http://localhost:5000/api/performances', performance);
      toast.success("Performance data saved successfully");
    } catch (error) {
      toast.error("Error saving performance data");
    }
  };


  console.log(performanceData)

  
  return (
    <div>
      <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg mb-8">
        <form>
          <h1 className="text-3xl font-bold text-center mb-6">Performance Calculator</h1>

          {/* Calories Input Card */}
          <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <label className="block text-lg font-semibold mb-2">Calories</label>
            <input
              type="number"
              name="calories"
              placeholder="Enter calories"
              value={performanceData.calories}
              onChange={changeHandler}
              required
              className="w-full p-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
            />
          </div>

          {/* Workout Hours Input Card */}
          <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <label className="block text-lg font-semibold mb-2">Workout Hours</label>
            <input
              type="number"
              name="workoutHours"
              placeholder="Enter workout hours"
              value={performanceData.workoutHours}
              onChange={changeHandler}
              required
              className="w-full p-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
            />
          </div>

          {/* Water Intake Input Card */}
          <div className="bg-white p-6 shadow-md rounded-lg mb-4">
            <label className="block text-lg font-semibold mb-2">Water Intake (liters)</label>
            <input
              type="number"
              name="waterIntake"
              placeholder="Enter water intake"
              value={performanceData.waterIntake}
              onChange={changeHandler}
              required
              className="w-full p-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
            />
          </div>

          {/* Sleep Input Card */}
          <div className="bg-white p-6 shadow-md rounded-lg mb-6">
            <label className="block text-lg font-semibold mb-2">Sleep (hours)</label>
            <input
              type="number"
              name="sleep"
              placeholder="Enter sleep hours"
              value={performanceData.sleep}
              onChange={changeHandler}
              required
              className="w-full p-3 border border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 ease-in-out"
            />
          </div>

          <button className="w-full py-3 bg-[#E09145] text-white font-semibold rounded-lg hover:bg-[#C67D34] transition-colors duration-300"
          onClick={updatePerformanceData}
          >
            Update Performance
          </button>
        </form>

        {/* Display Performance Score and Weight Gain */}
        {performanceScore !== null && weightGain !== null && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-center">Results</h2>
            <p className="text-2xl font-semibold text-center text-[#E09145]">Performance Score: {performanceScore}/100</p>
            <p className="text-xl font-semibold text-center text-[#E09145]">Expected Weight Gain: {weightGain} lbs</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
export default PerformanceCalculator; 