import React from 'react'
import Navbar from '../components/Navbar'

const intermidiatefasting = () => {
  return (
    <div>
        <Navbar/>
        <section className="py-18 flex min-h-screen relative flex-col items-center justify-center">
        
        {/* Centered Content */}
        <div className="bg-[white] max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center p-8 rounded-lg shadow-lg">
          {/* Image inside the content block */}
          {/* <div className="mb-8">
            <Image src={FastingImage} alt="Intermittent Fasting" className="w-48 h-auto mx-auto" />
          </div> */}

          <h1 className="font-manrope text-[#e09145] text-4xl font-bold mb-6">
            The Benefits of Intermittent Fasting
          </h1>
          <p className="text-lg text-[black] mb-6">
            Intermittent fasting (IF) is a popular eating pattern that involves cycling between periods of eating and fasting. It is known to support weight management, improve metabolic health, and enhance longevity.
          </p>

          <div className="bg-[#fcd9b8] p-6 rounded-lg shadow-md">
            <h2 className="font-manrope text-[black] text-3xl font-bold mb-4">
              Why Intermittent Fasting is Effective
            </h2>
            <p className="text-lg text-[black] mb-4">
              Intermittent fasting helps regulate your body’s metabolism by reducing the frequency of meals and extending the period during which your body can burn fat. It can enhance insulin sensitivity, improve fat burning, and promote cellular repair.
            </p>
            <p className="text-lg text-[black] mb-4">
              This fasting method can be flexible and easily adapted to various lifestyles. Common approaches include the 16/8 method, which involves fasting for 16 hours and eating during an 8-hour window, and the 5:2 method, where you eat normally for five days and reduce calorie intake for two days.
            </p>

            <h2 className="font-manrope text-[black] text-3xl font-bold mb-4">
              Tips for Starting Intermittent Fasting
            </h2>
            <ul className="list-none ml-6 text-lg text-[black] mb-6">
              <li className="mb-2">Choose a fasting method that fits your lifestyle and schedule.</li>
              <li className="mb-2">Start slowly by gradually increasing fasting periods.</li>
              <li className="mb-2">Stay hydrated during fasting periods to reduce hunger and maintain energy.</li>
              <li className="mb-2">Eat nutrient-dense foods during your eating windows to support your health.</li>
              <li className="mb-2">Be consistent with your fasting schedule to maximize results.</li>
            </ul>

            <h2 className="font-manrope text-[#e09145] text-3xl font-bold mb-4">
              Long-Term Benefits of Intermittent Fasting
            </h2>
            <p className="text-lg text-[black] mb-4">
              Over time, intermittent fasting can help you maintain a healthy weight, improve metabolic health, and reduce the risk of chronic diseases like diabetes and heart disease. Additionally, it may support longevity by promoting cellular repair processes such as autophagy.
            </p>
            <p className="text-lg text-[black]">
              By adopting intermittent fasting as part of a balanced lifestyle, you can experience both physical and mental health improvements. Start small and be mindful of your body's needs as you adapt to this sustainable eating pattern.
            </p>
          </div>
        </div>

        {/* Back Button */}
        
      </section>

    </div>
  )
}


export default intermidiatefasting
