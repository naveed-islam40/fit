import Navbar from "./components/Navbar";
import styles from '../styles/Page-module.css';
import Link from "next/link";
import Testimonials from "./testinomial/page";
import Footer from "./components/footer";
import Exercisecards from "./exercisecards/page";


export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <div className="flex flex-col items-center justify-between min-h-screen p-5 bg-white"> 
  <div className="flex flex-col md:flex-row items-center justify-between bg-white p-5 w-full overflow-hidden">
    <div className="flex-1 md:pr-12"> 
      <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4 pl-0 md:pl-32">
        Be Healthy, Stronger Everyday
      </h1>
      <p className="text-lg md:text-xl text-black mb-6 pl-0 md:pl-32">
        Welcome to Health Coach. You can transform through habit change.
      </p>
      <div className="pl-0 md:pl-32"> 
        <Link href={"/bmi"}>
          <button className="bg-[#E09145] text-white px-4 py-3 rounded-full hover:bg-[#b77627] transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
    <div className="flex-1 flex justify-end items-center max-w-full pl-0 md:pl-5 hidden md:flex"> 
      <img src={"/mainn.png"} alt="Health Coach" className="w-full h-auto object-cover max-w-full md:max-w-2xl rounded-lg" ></img>
    </div>
  </div>

        <Exercisecards />

        <div className="card-header text-center my-10">
          <h1 className="text-4xl font-bold text-gray-800">Educational Content</h1>
        </div>
        <div className="card-container-container">
          <div className="card-container">
            <div className="card-container-card">
              <img src={"/fit.png"} alt="Exercise Program" />
              <div className="card-container-card-content">
                <h1>Exercise</h1>
                <p>Exercise improves strength, endurance, and well-being.</p>
                <a href="/exercise" className="card-container-btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-container-card">
              <img src={"/nutrition.png"} alt="Nutrition Plans" />
              <div className="card-container-card-content">
                <h1>Balanced Diet</h1>
                <p>A balanced diet is key to maintaining overall health.</p>
                <a href="/Nutrition" className="card-container-btn">Read More</a>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card-container-card">
              <img src={"/Lunch (1).png"} alt="Diet Program" />
              <div className="card-container-card-content">
                <h1>Intermidiate Fasting</h1>
                <p>It helps manage weight and improve metabolism.</p>
                <a href="/intermidiateFasting" className="card-container-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />

    </div>

  );
}