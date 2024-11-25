import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Page-module.css'; 
const Main = () => {
  return (
    <div>
      <div className='hero-section'>
        <div className='hero-content'>
          <h1>Be Healthy, Stronger Everyday</h1>
          <p>Welcome to Health Coach. You can transform through habit change.</p>
          <Link href={"/bmi"}>
            <button>Get Started</button>
          </Link>
        </div>
        <div className='hero-image'>
          <img src={"/mainn.png"} alt="Health Coach" />
        </div>
      </div>

      <div className="card-container-container">
        <div className="card-container">
          <div className="card-container-card">
            <img src={"/fit.png"}alt="Exercise Program" />
            <div className="card-container-card-content">
              <h1>Exercise Program</h1>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              <a href="#" className="card-container-btn">Read More</a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-container-card">
            <img src={"/nutrition.png"} alt="Nutrition Plans" />
            <div className="card-container-card-content">
              <h1>Nutrition Plans</h1>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              <a href="#" className="card-container-btn">Read More</a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-container-card">
            <img src={"/Lunch (1).png"}alt="Diet Program" />
            <div className="card-container-card-content">
              <h1>Diet Program</h1>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              <a href="#" className="card-container-btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
