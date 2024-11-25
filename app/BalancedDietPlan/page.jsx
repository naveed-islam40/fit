import React from 'react';
import Link from 'next/link';

const BalancedDietPlan = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Balanced Diet Plan</h1>
          <p className="text-xl mb-6">A well-rounded approach to healthy weight gain with balanced nutrition for optimal health.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Day 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 1</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Whole grain toast with avocado, a poached egg, and a side of mixed berries (350 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A handful of almonds (100 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Grilled chicken salad with mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Greek yogurt with honey and chia seeds (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked salmon with quinoa and steamed asparagus (550 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small apple (80 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 2</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Smoothie with spinach, banana, almond milk, and a scoop of protein powder (350 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Carrot sticks with hummus (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Turkey and avocado wrap with a side of mixed greens (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Cottage cheese with pineapple chunks (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Stir-fried tofu with vegetables and a small serving of brown rice (550 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A few slices of watermelon (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 3</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Oatmeal with fresh fruit, a tablespoon of flaxseeds, and a drizzle of honey (350 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small orange (80 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Lentil soup with a side of mixed greens (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Greek yogurt with a sprinkle of granola (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Grilled shrimp with a side of roasted vegetables and a small serving of wild rice (550 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A handful of grapes (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 4</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Scrambled eggs with spinach, tomatoes, and a side of whole grain toast (350 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small banana (90 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Quinoa salad with chickpeas, cucumbers, bell peppers, and a light vinaigrette (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Celery sticks with almond butter (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked chicken breast with sweet potato and green beans (550 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small pear (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 5</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Chia pudding made with almond milk and topped with fresh fruit (350 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A handful of mixed nuts (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Turkey and vegetable stir-fry with a small portion of brown rice (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Sliced bell peppers with hummus (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked cod with steamed broccoli and a small serving of quinoa (550 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A few slices of pineapple (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 6</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Smoothie bowl with spinach, frozen berries, and a sprinkle of granola (350 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small handful of almonds (100 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Chicken salad with mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Greek yogurt with honey and chia seeds (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Grilled pork chop with a side of roasted Brussels sprouts (550 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small peach (80 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 7</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Whole grain toast with avocado, a poached egg, and a side of mixed berries (350 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A handful of almonds (100 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Black bean soup with a side salad (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Greek yogurt with a drizzle of honey (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked chicken breast with a side of steamed green beans and a small serving of wild rice (550 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A few slices of pineapple (100 calories)</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Tips</h2>
          <ul className="list-disc list-inside text-lg mx-auto max-w-2xl">
            <li className="mb-2">Ensure each meal includes a balance of proteins, carbohydrates, and healthy fats.</li>
            <li className="mb-2">Include a variety of fruits and vegetables in your diet for essential nutrients.</li>
            <li className="mb-2">Stay hydrated and drink plenty of water throughout the day.</li>
            <li className="mb-2">Combine a balanced diet with regular exercise for overall health benefits.</li>
          </ul>
        </div> */}
        
        {/* <div className="text-center mt-12">
          <Link href="/get-started" className="bg-[#e09145] text-white py-2 px-6 rounded-lg hover:bg-[#d07538]">
            Get Started
          </Link>
        </div> */}

      </div>
    </section>
  );
};

export default BalancedDietPlan;
