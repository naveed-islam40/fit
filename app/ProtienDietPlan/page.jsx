import React from 'react';

const ProteinRichDietPlan = () => {
  const dailyCalories = "2,500 to 3,000 calories";

  // Meal plan data
  const mealPlans = [
    {
      day: "Day 1",
      meals: [
        { meal: "Breakfast", details: "Scrambled eggs with spinach and cheese, 2 slices of whole grain toast", calories: 600 },
        { meal: "Snack", details: "Greek yogurt with chia seeds", calories: 350 },
        { meal: "Lunch", details: "Grilled turkey breast with a quinoa and black bean salad", calories: 700 },
        { meal: "Snack", details: "Protein shake with whey protein and milk", calories: 300 },
        { meal: "Dinner", details: "Grilled shrimp with a side of brown rice and steamed broccoli", calories: 800 },
        { meal: "Snack", details: "Cottage cheese with pineapple chunks", calories: 250 },
      ]
    },
    {
      day: "Day 2",
      meals: [
        { meal: "Breakfast", details: "Smoothie with spinach, protein powder, almond milk, and berries", calories: 600 },
        { meal: "Snack", details: "Hard-boiled eggs and a handful of almonds", calories: 300 },
        { meal: "Lunch", details: "Chicken breast with roasted vegetables and sweet potato", calories: 700 },
        { meal: "Snack", details: "Edamame and hummus", calories: 350 },
        { meal: "Dinner", details: "Beef stew with potatoes, carrots, and peas", calories: 800 },
        { meal: "Snack", details: "Protein bar", calories: 250 },
      ]
    },
    {
      day: "Day 3",
      meals: [
        { meal: "Breakfast", details: "Scrambled eggs with spinach and cheese, 2 slices of whole grain toast", calories: 600 },
        { meal: "Snack", details: "Greek yogurt with chia seeds", calories: 350 },
        { meal: "Lunch", details: "Grilled turkey breast with a quinoa and black bean salad", calories: 700 },
        { meal: "Snack", details: "Protein shake with whey protein and milk", calories: 300 },
        { meal: "Dinner", details: "Grilled shrimp with a side of brown rice and steamed broccoli", calories: 800 },
        { meal: "Snack", details: "Cottage cheese with pineapple chunks", calories: 250 },
      ]
    },
    {
      day: "Day 4",
      meals: [
        { meal: "Breakfast", details: "Smoothie with spinach, protein powder, almond milk, and berries", calories: 600 },
        { meal: "Snack", details: "Hard-boiled eggs and a handful of almonds", calories: 300 },
        { meal: "Lunch", details: "Chicken breast with roasted vegetables and sweet potato", calories: 700 },
        { meal: "Snack", details: "Edamame and hummus", calories: 350 },
        { meal: "Dinner", details: "Beef stew with potatoes, carrots, and peas", calories: 800 },
        { meal: "Snack", details: "Protein bar", calories: 250 },
      ]
    },
    {
      day: "Day 5",
      meals: [
        { meal: "Breakfast", details: "Scrambled eggs with spinach and cheese, 2 slices of whole grain toast", calories: 600 },
        { meal: "Snack", details: "Greek yogurt with chia seeds", calories: 350 },
        { meal: "Lunch", details: "Grilled turkey breast with a quinoa and black bean salad", calories: 700 },
        { meal: "Snack", details: "Protein shake with whey protein and milk", calories: 300 },
        { meal: "Dinner", details: "Grilled shrimp with a side of brown rice and steamed broccoli", calories: 800 },
        { meal: "Snack", details: "Cottage cheese with pineapple chunks", calories: 250 },
      ]
    },
    {
      day: "Day 6",
      meals: [
        { meal: "Breakfast", details: "Smoothie with spinach, protein powder, almond milk, and berries", calories: 600 },
        { meal: "Snack", details: "Hard-boiled eggs and a handful of almonds", calories: 300 },
        { meal: "Lunch", details: "Chicken breast with roasted vegetables and sweet potato", calories: 700 },
        { meal: "Snack", details: "Edamame and hummus", calories: 350 },
        { meal: "Dinner", details: "Beef stew with potatoes, carrots, and peas", calories: 800 },
        { meal: "Snack", details: "Protein bar", calories: 250 },
      ]
    },
    {
      day: "Day 7",
      meals: [
        { meal: "Breakfast", details: "Scrambled eggs with spinach and cheese, 2 slices of whole grain toast", calories: 600 },
        { meal: "Snack", details: "Greek yogurt with chia seeds", calories: 350 },
        { meal: "Lunch", details: "Grilled turkey breast with a quinoa and black bean salad", calories: 700 },
        { meal: "Snack", details: "Protein shake with whey protein and milk", calories: 300 },
        { meal: "Dinner", details: "Grilled shrimp with a side of brown rice and steamed broccoli", calories: 800 },
        { meal: "Snack", details: "Cottage cheese with pineapple chunks", calories: 250 },
      ]
    }
  ];

  return (
    <div>
       <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Protein-Rich Diet Plan</h2>
          <p className="text-lg mb-6">
            For effective muscle growth and weight gain, aim for a daily caloric intake of <strong>{dailyCalories}</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mealPlans.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{plan.day}</h3>
                <ul className="list-none space-y-4">
                  {plan.meals.map((meal, i) => (
                    <li key={i} className="mb-2">
                      <div className="font-semibold">{meal.meal}</div>
                      <div>{meal.details} ({meal.calories} calories)</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProteinRichDietPlan;

