import React from 'react';
import Link from 'next/link';
import styles from '../../styles/cards-module.css'; // Ensure this path is correct

const Cards = () => {
  return (
    <div className="card-container-container">
      <div className="card-container">
        <div className="card-container-card">
          <img src="/Assessts/bg_4.jpg" alt="Exercise Program" />
          <div className="card-container-card-content">
            <h1>Exercise Program</h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            <Link href="/Workout">
              <a className="card-container-btn">Read More</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-container-card">
          <img src="/Assessts/bg_2.jpg" alt="Nutrition Plans" /> {/* Update image path */}
          <div className="card-container-card-content">
            <h1>Nutrition Plans</h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            <Link href="/Nutrition">
              <a className="card-container-btn">Read More</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-container-card">
          <img src="/Assessts/bg_5.jpg" alt="Diet Program" />
          <div className="card-container-card-content">
            <h1>Diet Program</h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            <Link href="/Diet">
              <a className="card-container-btn">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

