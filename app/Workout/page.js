import Image from "next/image";
import styles from '../../app/page.module.css';
import WorkoutImage from '../public/workout2.png'; // Update with your workout image

export default function WorkoutPlan() {
  

  return (
    <>
      <section className="py-24 flex min-h-screen relative flex-col items-center justify-center">
        
        
        <div className="bg-[white] max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center p-8 rounded-lg shadow-lg">
          
          <div className="mb-8">
            <Image src={WorkoutImage} alt="Workout Plan" className="w-48 h-auto mx-auto" />
          </div>

          <h1 className="font-manrope text-[#e09145] text-4xl font-bold mb-6">
            The Benefits of a Structured Workout Plan
          </h1>
          <p className="text-lg text-[black] mb-6">
            A well-structured workout plan is essential for achieving fitness goals and maintaining overall health. Regular exercise helps build strength, increase endurance, and improve mental well-being.
          </p>

          <div className="bg-[#fcd9b8] p-6 rounded-lg shadow-md">
            <h2 className="font-manrope text-[black] text-3xl font-bold mb-4">
              Why a Workout Plan is Essential
            </h2>
            <p className="text-lg text-[black] mb-4">
              A structured workout plan helps you stay focused and motivated by setting clear fitness goals. It ensures you target all major muscle groups and avoid overtraining or injury. Additionally, having a plan allows you to track progress and make necessary adjustments.
            </p>
            <p className="text-lg text-[black] mb-4">
              Consistent exercise improves cardiovascular health, builds muscle strength, and boosts metabolism. A well-balanced plan includes a mix of strength training, cardio, and flexibility exercises to create a comprehensive fitness routine.
            </p>

            <h2 className="font-manrope text-[black] text-3xl font-bold mb-4">
              Tips for Creating an Effective Workout Plan
            </h2>
            <ul className="list-disc ml-6 text-lg text-[black] mb-6">
              <li className="mb-2">Set specific and achievable fitness goals based on your needs.</li>
              <li className="mb-2">Incorporate a variety of exercises to target different muscle groups.</li>
              <li className="mb-2">Include both cardio and strength training in your routine.</li>
              <li className="mb-2">Allow for rest and recovery days to prevent overtraining.</li>
              <li className="mb-2">Track your progress and adjust your plan as needed.</li>
            </ul>

            <h2 className="font-manrope text-[#e09145] text-3xl font-bold mb-4">
              Long-Term Benefits of Regular Exercise
            </h2>
            <p className="text-lg text-[black] mb-4">
              Engaging in a structured workout plan yields numerous long-term benefits, including improved physical fitness, increased energy levels, and better mental health. Regular exercise reduces the risk of chronic diseases and supports overall well-being.
            </p>
            <p className="text-lg text-[black]">
              Committing to a well-designed workout plan sets you on the path to achieving your fitness goals and living a healthier life. Start with small, manageable steps and build upon them to create a sustainable and effective exercise routine.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <button
         // Use router.back() to go to the previous page
          className="mt-10 px-4 py-2 bg-[#e09145] text-black rounded-lg shadow-md hover:bg-[#e09145] transition duration-300"
        >
          Back
        </button>
      </section>
    </>
  );
}
