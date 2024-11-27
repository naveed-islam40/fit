import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PerformanceCard = ({ title, value, maxValue }) => {
    const percentage = Math.round((value / maxValue) * 100);

    const data = {
        labels: [title, 'Remaining'],
        datasets: [{
            data: [percentage, 100 - percentage],
            backgroundColor: ['#FF6384', '#ccc'],
        }]
    };

    const options = {
        cutout: '70%',
        plugins: {
            legend: { display: false },
        },
    };

    return (
        <div className="performance-card flex flex-col items-center justify-center gap-6">
            <div className="card-header">{title}</div>
            <div className="card-body flex items-center justify-center flex-col " style={{ width: '200px', height: '200px' }}>
                <Doughnut data={data} options={options} />
                <p>{value} / {maxValue}</p>
            </div>
        </div>
    );
};

export default PerformanceCard;
