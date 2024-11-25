import React from 'react';
import Link from 'next/link';

const LowCalorieMealPlan = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Low-Calorie Meal Plan</h1>
          <p className="text-xl mb-6">A structured plan with calorie-controlled meals and snacks to help you create a calorie deficit and lose weight effectively.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Day 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 1</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Greek yogurt with mixed berries and a sprinkle of chia seeds (300 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small apple (80 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Grilled chicken breast with a large mixed salad (400 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Carrot sticks with hummus (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked salmon with steamed broccoli and quinoa (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A handful of almonds (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 2</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Smoothie with spinach, banana, and almond milk (300 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A handful of berries (60 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Turkey and avocado wrap with a side of mixed greens (400 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Cucumber slices with guacamole (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Stir-fried tofu with vegetables and a small serving of brown rice (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small pear (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 3</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Oatmeal with a tablespoon of flaxseeds and fresh fruit (300 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small orange (80 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Lentil soup with a side of mixed greens (400 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Greek yogurt (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Grilled shrimp with a side of roasted vegetables (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A few slices of watermelon (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 4</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Scrambled eggs with spinach and tomatoes (300 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small banana (90 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Quinoa salad with chickpeas, cucumbers, and bell peppers (400 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A few baby carrots (50 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked chicken thighs with sweet potato and green beans (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small apple (80 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 5</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Chia pudding with almond milk and fresh fruit (300 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A handful of mixed nuts (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Turkey and vegetable stir-fry with a small portion of brown rice (400 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Sliced bell peppers with hummus (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked cod with steamed asparagus and a small serving of quinoa (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small handful of grapes (100 calories)</p>
              </div>
            </div>
          </div>

          {/* Day 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Day 6</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p>Smoothie bowl with spinach, frozen berries, and a sprinkle of granola (300 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small handful of almonds (100 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Chicken salad with mixed greens and a light vinaigrette (400 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Celery sticks with almond butter (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Grilled pork chop with a side of roasted Brussels sprouts (500 calories)</p>
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
                <p>Whole grain toast with avocado and a poached egg (300 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A small handful of mixed berries (60 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p>Black bean soup with a side salad (400 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>Greek yogurt with a drizzle of honey (150 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Baked chicken breast with a side of steamed green beans and a small serving of wild rice (500 calories)</p>
              </div>
              <div>
                <p className="font-semibold">Snack</p>
                <p>A few slices of pineapple (100 calories)</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Uncomment the link if needed */}
        {/* <div className="text-center mt-12">
          <Link href="/get-started" className="bg-[#e09145] text-white py-2 px-6 rounded-lg hover:bg-[#d07538]">
            Get Started
          </Link>
        </div> */}

      </div>
    </section>
  );
};

export default LowCalorieMealPlan;
