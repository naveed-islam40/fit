"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import { FaEdit, FaBars } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import PerformanceCard from "@/chart/progressChart";

export default function Dashboard() {
  const [reportData, setReportData] = useState(null);
  const [performanceData, setPerformanceData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    if (panelOpen) {
      // Disable scrolling when the panel is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the panel is closed
      document.body.style.overflow = "auto";
    }
  }, [panelOpen]);

  const [inputData, setInputData] = useState({
    calories: "",
    workoutHours: "",
    waterIntake: "",
    sleep: "",
  });
  const [performanceScore, setPerformanceScore] = useState(null);
  const [weightGain, setWeightGain] = useState(null);
  const [isDataChanged, setIsDataChanged] = useState(false);

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("id") : null;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculatePerformance = ({
    calories,
    workoutHours,
    waterIntake,
    sleep,
  }) => {
    const caloriesScore = calories >= 1500 && calories <= 2500 ? 25 : 0;
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
    const { calories, workoutHours, waterIntake, sleep } = inputData;

    if (!calories || !workoutHours || !waterIntake || !sleep) {
      toast.error("All fields are required");
      return;
    }

    const { totalScore, weightGain } = calculatePerformance({
      calories: parseFloat(calories),
      workoutHours: parseFloat(workoutHours),
      waterIntake: parseFloat(waterIntake),
      sleep: parseFloat(sleep),
    });

    setPerformanceScore(totalScore);
    setWeightGain(weightGain);

    if (!userId) {
      toast.error("User ID not found in localStorage");
      return;
    }

    const performance = {
      userId,
      calories: parseFloat(calories),
      workoutHours: parseFloat(workoutHours),
      waterIntake: parseFloat(waterIntake),
      sleep: parseFloat(sleep),
      score: totalScore,
      weightGain: parseFloat(weightGain),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/performances",
        performance
      );
      toast.success("Performance data saved successfully");
      setIsDataChanged(!isDataChanged);
      setInputData({
        calories: "",
        workoutHours: "",
        waterIntake: "",
        sleep: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("You can only create 1 performance record per 24 hours.");
    }
  };

  const downloadReport = async () => {
    if (!userId) {
      toast.error("User ID not found in localStorage");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/api/report/${userId}/last7days`
      );

      const reportData = response.data?.results || [];
      console.log("use this", reportData);

      if (!Array.isArray(reportData) || reportData.length === 0) {
        toast.error("No report data available to download");
        return;
      }

      const csvData = generateCSV(reportData);

      const blob = new Blob([csvData], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "7_days_report.csv";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Report downloaded successfully");
    } catch (error) {
      console.error(
        "Error downloading report:",
        error.response || error.message
      );
      toast.error("Failed to download the report. Please try again.");
    }
  };

  const generateCSV = (data) => {
    console.log("Data passed to generateCSV:", data);

    const headers = [
      "Date",
      "Calories",
      "Workout Hours",
      "Water Intake",
      "Sleep",
      "Score",
    ];

    if (!Array.isArray(data)) {
      console.error("Data is not an array:", data);
      return "";
    }

    const rows = data.map((row) => [
      new Date(row.createdAt).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      row.calories || 0,
      row.workoutHours || 0,
      row.waterIntake || 0,
      row.sleep || 0,
      row.score || 0,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    return csvContent;
  };

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5000/api/report/${userId}/last7days)`)
        .then((res) => setReportData(res.data?.results || []))
        .catch((err) => console.error("Error fetching report data:", err));
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5000/api/performances/${userId}`)
        .then((res) => setPerformanceData(res.data))
        .catch((err) => console.error("Error fetching performance data:", err));
    }
  }, [userId, isDataChanged]);

  useEffect(() => {
    if (userId) {
      axios
        .get(
          `http://localhost:5000/api/performances/${userId}/data?page=${currentPage}`
        )
        .then((res) => {
          setTableData(res.data.results);
          setTotalPages(res.data.totalPages);
        })
        .catch((err) => console.error("Error fetching table data:", err));
    }
  }, [userId, currentPage, isDataChanged]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const performanceCards = useMemo(() => {
    if (tableData.length > 0) {
      const latestData = tableData[tableData.length - 1];
      return [
        { title: "Calories", value: latestData.calories || 0, maxValue: 2500 },
        {
          title: "Workout Hours",
          value: latestData.workoutHours || 0,
          maxValue: 2,
        },
        { title: "Sleep (hours)", value: latestData.sleep || 0, maxValue: 9 },
        {
          title: "Water Intake (liters)",
          value: latestData.waterIntake || 0,
          maxValue: 5,
        },
      ];
    }
    return [];
  }, [tableData]);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="min-h-screen bg-grayLight flex">
        <div>
          <aside
            className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg border-r border-grayLight mt-[82px]  p-4 transform transition-transform duration-500 ${
              panelOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h2 className="text-black font-semibold mb-4">
              Performance Calculator
            </h2>
            <form onSubmit={submitHandler}>
              <div className="space-y-4">
                {[
                  { label: "Calories", name: "calories" },
                  { label: "Workout Hours", name: "workoutHours" },
                  { label: "Water Intake (liters)", name: "waterIntake" },
                  { label: "Sleep (hours)", name: "sleep" },
                ].map(({ label, name }, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 shadow-md rounded-lg"
                  >
                    <label className="block text-sm font-semibold mb-1">
                      {label}
                    </label>
                    <input
                      type="number"
                      name={name}
                      placeholder={`Enter ${label.toLowerCase()}`}
                      value={inputData[name]}
                      onChange={changeHandler}
                      required
                      className="w-full p-2 border border-gray-300 bg-white rounded-lg"
                    />
                  </div>
                ))}
                <button className="w-full py-2 bg-[#E09145] text-white font-semibold rounded-lg hover:bg-[#C67D34] transition-colors duration-300">
                  Calculate Performance
                </button>
              </div>
            </form>

            {performanceScore !== null && weightGain !== null && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-bold">Results</h2>
                <p className="text-xl font-semibold text-[#E09145]">
                  Score: {performanceScore}/100
                </p>
                <p className="text-md font-semibold text-[#E09145]">
                  Weight Gain: {weightGain} lbs
                </p>
              </div>
            )}
          </aside>
        </div>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-end p-4">
            <button
              onClick={() => setPanelOpen(!panelOpen)}
              className="p-2 bg-[#E09145] text-white rounded-lg shadow-lg hover:bg-[#C67D34] transition-colors duration-300 flex items-center gap-2"
            >
              {/* <FaBars className="text-2xl" /> */}
              Performance Calculator
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {performanceCards.map((card, index) => (
              <PerformanceCard
                key={index}
                title={card.title}
                value={card.value}
                maxValue={card.maxValue}
              />
            ))}
          </div>
          {/* Performance Data Table */}
          <div className="mt-8">
            <div className="mt-8 flex items-center justify-between">
              <h3 className="text-black font-bold mb-4 text-2xl">
                Performance Data
              </h3>
              <button
                onClick={downloadReport}
                className="bg-red-500 pl-5 pr-5 pt-4 pb-4 font-bold rounded-lg text-white"
                type="button"
              >
                Report
              </button>
            </div>

            <div className="bg-white shadow-lg rounded-lg mt-2  p-6 border border-grayLight">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="p-4 border-b">Date</th>
                    <th className="p-4 border-b">Calories</th>
                    <th className="p-4 border-b">Workout Hours</th>
                    <th className="p-4 border-b">Water Intake</th>
                    <th className="p-4 border-b">Sleep</th>
                    <th className="p-4 border-b">Score</th>
                    <th className="p-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.length > 0 ? (
                    tableData.map((row, index) => (
                      <tr key={index} className="hover:bg-grayLight">
                        <td className="p-4 border-b">
                          {new Date(row.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}{" "}
                          {new Date(row.createdAt).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="p-4 border-b">{row.calories}</td>
                        <td className="p-4 border-b">{row.workoutHours}</td>
                        <td className="p-4 border-b">{row.waterIntake}</td>
                        <td className="p-4 border-b">{row.sleep}</td>
                        <td className="p-4 border-b">{row.score}</td>
                        <td className="p-4 border-b">
                          <Link href={`/dashboard/edit/${row._id}`}>
                            <button className="text-[#E09145] hover:text-[#E09145] p-2 rounded-full transition">
                              <FaEdit />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="p-4 border-b" colSpan="7">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-[#E09145] text-white rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-[#E09145] text-white rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
