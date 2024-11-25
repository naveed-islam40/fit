import React from 'react'
import Navbar from '../components/Navbar'

const nutrition = () => {
  return (
    <div>
        <Navbar/>
      <section className="py-18 flex min-h-screen relative flex-col items-center justify-center">
        
        <div className="bg-[white]] max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center p-8 rounded-lg shadow-lg">
          <h1 className="font-manrope text-[#e09145] text-4xl font-bold mb-6">
            The Importance of a Balanced Diet
          </h1>
          <p className="text-lg text-[black] mb-6">
            Maintaining a balanced diet is crucial for overall health and well-being. A well-rounded nutrition plan helps in achieving a healthier lifestyle, boosting energy levels, and enhancing mental and physical performance.
          </p>

          <div className="bg-[#fcd9b8] p-6 rounded-lg shadow-md">
            <h2 className="font-manrope text-[black] text-3xl font-bold mb-4">
              Why a Balanced Diet Matters
            </h2>
            <p className="text-lg text-[black] mb-4">
              A balanced diet provides your body with essential nutrients required for daily functioning. It includes a variety of foods in the right proportions to maintain health and energy levels. Consuming a diverse range of nutrients supports metabolic processes, helps in disease prevention, and promotes overall wellness.
            </p>
            <p className="text-lg text-[black] mb-4">
              Adopting a balanced diet can improve your quality of life by stabilizing your weight, improving digestion, and enhancing your immune system. By focusing on a mix of carbohydrates, proteins, fats, vitamins, and minerals, you create a foundation for a healthier lifestyle.
            </p>

            <h2 className="font-manrope text-[black] text-3xl font-bold mb-4">
              Tips for Maintaining a Balanced Diet
            </h2>
            <ul className="list-none ml-6 text-lg text-[black] mb-6">
              <li className="mb-2">Include a variety of fruits and vegetables in your daily meals.</li>
              <li className="mb-2">Opt for whole grains over refined grains.</li>
              <li className="mb-2">Incorporate lean proteins like chicken, fish, and legumes.</li>
              <li className="mb-2">Use healthy fats from sources like avocados, nuts, and olive oil.</li>
              <li className="mb-2">Stay hydrated by drinking plenty of water throughout the day.</li>
            </ul>

            <h2 className="font-manrope text-[#fcd9b8] text-3xl font-bold mb-4">
              Long-Term Benefits of Healthy Eating
            </h2>
            <p className="text-lg text-[black] mb-4">
              Consistently following a balanced diet leads to numerous long-term benefits, including reduced risk of chronic diseases, better heart health, and improved cognitive function. It also supports a positive mood and enhances overall mental health.
            </p>
            <p className="text-lg text-[black]">
              By making mindful food choices and establishing healthy eating habits, you pave the way for a more fulfilling and healthier life. Remember, the journey to better nutrition starts with small, sustainable changes that can have a significant impact over time.
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default nutrition
