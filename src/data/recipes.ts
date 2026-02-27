import { Recipe } from '../types';

export const recipes: Recipe[] = [
  // PART 1 - BREADS
  {
    id: 'bread-1',
    title: 'Classic Banana Oat Bread',
    category: 'bread',
    ingredients: [
      '3 very ripe bananas (mashed)',
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water. Let sit 10 minutes before using.',
      'No sugar? The ripe bananas are naturally sweet enough. You can also add 2 tablespoons of maple syrup.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mash bananas well in a large bowl.',
      'Add eggs and coconut oil. Mix until combined.',
      'Stir in oat flour, baking powder, cinnamon and salt.',
      'Pour batter into a greased loaf pan.',
      'Bake for 35-40 minutes or until a toothpick comes out clean.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-2',
    title: 'Sweet Potato Bread',
    category: 'bread',
    ingredients: [
      '1 cup mashed sweet potato (cooked)',
      '3 eggs (optional - see tip)',
      '1 cup gluten-free oat flour',
      '2 tablespoons coconut oil',
      '1 tablespoon baking powder',
      '1 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water. Let sit 10 minutes.',
      'No sugar? Sweet potato is naturally sweet. Add 1 tablespoon of maple syrup if desired.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, mashed sweet potato and coconut oil in a bowl.',
      'Add oat flour, baking powder, cinnamon and salt. Stir well.',
      'Pour into a greased loaf pan.',
      'Bake for 30-35 minutes.',
      'Let cool completely before slicing.'
    ]
  },
  {
    id: 'bread-3',
    title: 'Zucchini & Herb Bread',
    category: 'bread',
    ingredients: [
      '1 cup grated zucchini (squeeze out excess water)',
      '3 eggs (optional - see tip)',
      '1 and 1/2 cups rice flour',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon dried rosemary',
      '1 teaspoon garlic powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'This bread is savory, so no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Beat eggs with olive oil in a bowl.',
      'Add grated zucchini and mix.',
      'Stir in rice flour, baking powder, rosemary, garlic powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35 minutes or until golden on top.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-4',
    title: 'Southern-Style Cornbread',
    category: 'bread',
    ingredients: [
      '2 eggs (optional - see tip)',
      '1 and 1/2 cups gluten-free cornmeal',
      '1/2 cup rice flour',
      '1 cup unsweetened almond milk',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt',
      '2 tablespoons sugar (optional)'
    ],
    tips: [
      'No eggs? Use 2 tablespoons of flaxseed meal mixed with 6 tablespoons of water.',
      'No sugar? Simply omit it. The cornmeal gives a natural mild sweetness.'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Mix cornmeal, rice flour, baking powder and salt in a bowl.',
      'In another bowl, whisk eggs, almond milk and coconut oil.',
      'Combine wet and dry ingredients. Stir until just mixed.',
      'Pour into a greased baking pan or cast iron skillet.',
      'Bake for 20-25 minutes until golden on top.',
      'Let cool 10 minutes before cutting into squares.'
    ]
  },
  {
    id: 'bread-5',
    title: 'Pumpkin Seed Loaf',
    category: 'bread',
    ingredients: [
      '4 eggs (optional - see tip)',
      '1 cup unsweetened pumpkin puree',
      '1 cup brown rice flour',
      '1/2 cup pumpkin seeds',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 4 tablespoons of chia seeds mixed with 12 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Blend eggs, pumpkin puree and coconut oil until smooth.',
      'Combine rice flour, baking powder, xanthan gum and salt in a bowl.',
      'Mix wet and dry ingredients together. Fold in pumpkin seeds.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes or until a toothpick comes out clean.',
      'Let cool 15 minutes before slicing.'
    ]
  },
  {
    id: 'bread-6',
    title: 'Chickpea Flatbread',
    category: 'bread',
    ingredients: [
      '2 cups chickpea flour',
      '3/4 cup warm water',
      '2 tablespoons olive oil',
      '1 teaspoon baking powder',
      '1 teaspoon cumin (optional)',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs needed in this recipe.',
      'This is a savory flatbread, no sugar needed.'
    ],
    instructions: [
      'Mix chickpea flour, baking powder, cumin and salt in a bowl.',
      'Add olive oil and warm water. Stir until smooth batter forms.',
      'Heat a non-stick pan over medium heat. Lightly grease with oil.',
      'Pour a ladle of batter and spread into a circle.',
      'Cook 3-4 minutes each side until golden.',
      'Serve as a wrap or sandwich base.'
    ]
  },
  {
    id: 'bread-7',
    title: 'Blueberry Breakfast Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh or frozen blueberries',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? The blueberries and applesauce add plenty of natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla in a bowl.',
      'Add oat flour, baking powder and salt. Mix well.',
      'Gently fold in blueberries.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes or until toothpick comes out clean.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-8',
    title: 'Rosemary Olive Oil Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups rice flour',
      '1/2 cup tapioca starch',
      '3/4 cup warm water',
      '1/3 cup olive oil',
      '2 teaspoons instant yeast',
      '1 teaspoon xanthan gum',
      '1 tablespoon fresh rosemary (chopped)',
      '1 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix yeast with warm water. Let sit 5 minutes until foamy.',
      'Combine rice flour, tapioca, xanthan gum and salt in a bowl.',
      'Add eggs, olive oil and yeast mixture. Mix well.',
      'Fold in rosemary.',
      'Pour into a greased loaf pan.',
      'Let rise 30 minutes, then bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-9',
    title: 'Cinnamon Raisin Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup raisins',
      '1/2 cup unsweetened applesauce',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '2 teaspoons cinnamon',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Raisins and applesauce are naturally sweet enough.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce and coconut oil in a bowl.',
      'Add oat flour, baking powder, cinnamon and salt. Stir well.',
      'Fold in raisins.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-10',
    title: 'Almond Flour Sandwich Bread',
    category: 'bread',
    ingredients: [
      '5 eggs (optional - see tip)',
      '2 and 1/2 cups almond flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon apple cider vinegar',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 5 tablespoons of chia seeds mixed with 15 tablespoons of water. Note: texture will be denser.',
      'This bread is naturally low in sugar. No added sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Whisk together eggs, coconut oil and vinegar.',
      'Add almond flour, baking powder and salt. Mix until smooth.',
      'Pour into a greased loaf pan.',
      'Bake for 30-35 minutes until golden and firm on top.',
      'Let cool completely before slicing.'
    ]
  },
  {
    id: 'bread-11',
    title: 'Sunflower Seed Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 and 1/2 cups rice flour',
      '1/2 cup sunflower seeds',
      '1/2 cup water',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, water and olive oil in a bowl.',
      'Add rice flour, baking powder, xanthan gum and salt.',
      'Fold in sunflower seeds.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes until firm and golden.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-12',
    title: 'Carrot & Ginger Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup grated carrots',
      '1 and 1/2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon ground ginger',
      '1/2 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Carrots add natural sweetness on their own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs and coconut oil in a bowl.',
      'Add grated carrots and mix.',
      'Stir in oat flour, baking powder, ginger, cinnamon and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35 minutes until golden.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-13',
    title: 'Olive & Sun-Dried Tomato Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup sliced olives',
      '1/4 cup sun-dried tomatoes (chopped)',
      '2 cups rice flour',
      '1/3 cup olive oil',
      '3/4 cup warm water',
      '1 tablespoon baking powder',
      '1 teaspoon Italian seasoning',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, olive oil and water in a bowl.',
      'Add rice flour, baking powder, Italian seasoning and salt.',
      'Fold in olives and sun-dried tomatoes.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-14',
    title: 'Cranberry Walnut Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup dried cranberries',
      '1/2 cup chopped walnuts',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Cranberries and applesauce provide natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce and coconut oil in a bowl.',
      'Add oat flour, baking powder and salt. Mix well.',
      'Fold in cranberries and walnuts.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-15',
    title: 'Spinach & Garlic Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh spinach (finely chopped)',
      '2 cups rice flour',
      '1/3 cup olive oil',
      '3/4 cup warm water',
      '1 tablespoon baking powder',
      '2 cloves garlic (minced)',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, olive oil, water and garlic in a bowl.',
      'Add chopped spinach and mix.',
      'Stir in rice flour, baking powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-16',
    title: 'Lemon Poppy Seed Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/4 cup coconut oil (melted)',
      'Juice and zest of 1 lemon',
      '2 tablespoons poppy seeds',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? The lemon gives a fresh, bright flavor on its own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil, lemon juice and zest.',
      'Add oat flour, baking powder, poppy seeds and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-17',
    title: 'Apple Cinnamon Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup grated apple (peeled)',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '2 teaspoons cinnamon',
      '1/2 teaspoon nutmeg',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Grated apple is naturally sweet enough.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs and coconut oil in a bowl.',
      'Add grated apple and mix.',
      'Stir in oat flour, baking powder, cinnamon, nutmeg and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-18',
    title: 'Quinoa Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup cooked quinoa',
      '1 and 1/2 cups rice flour',
      '1/4 cup olive oil',
      '1/2 cup water',
      '1 tablespoon baking powder',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, olive oil and water in a bowl.',
      'Add cooked quinoa and mix.',
      'Stir in rice flour, baking powder, xanthan gum and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes until firm and golden.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-19',
    title: 'Black Bean Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup cooked black beans (mashed)',
      '1 cup rice flour',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon cumin',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mash black beans well.',
      'Mix eggs, olive oil and mashed beans in a bowl.',
      'Add rice flour, baking powder, cumin and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-20',
    title: 'Strawberry Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh strawberries (diced)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Fresh strawberries and applesauce provide natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Gently fold in strawberries.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-21',
    title: 'Pecan & Maple Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup chopped pecans',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '1 tablespoon baking powder',
      '1 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '2 tablespoons maple syrup (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sweetener? Applesauce and pecans give a mild natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and maple syrup.',
      'Add oat flour, baking powder, cinnamon and salt.',
      'Fold in pecans.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-22',
    title: 'Coconut Flour Bread',
    category: 'bread',
    ingredients: [
      '6 eggs (optional - see tip)',
      '1/2 cup coconut flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon apple cider vinegar',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 6 tablespoons of chia seeds mixed with 18 tablespoons of water. Note: coconut flour absorbs a lot of moisture, texture may vary.',
      'This bread is naturally mild. No added sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Whisk eggs, coconut oil and vinegar together.',
      'Add coconut flour, baking powder and salt. Mix well.',
      'Pour into a greased small loaf pan.',
      'Bake for 30-35 minutes until golden.',
      'Let cool completely before slicing.'
    ]
  },
  {
    id: 'bread-23',
    title: 'Butternut Squash Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup mashed butternut squash',
      '1 and 1/2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon cinnamon',
      '1/4 teaspoon nutmeg',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Butternut squash is naturally sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, mashed squash and coconut oil.',
      'Add oat flour, baking powder, cinnamon, nutmeg and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-24',
    title: 'Avocado Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 ripe avocado (mashed)',
      '1 and 1/2 cups rice flour',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      'Juice of 1 lime',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mash avocado and mix with eggs, olive oil and lime juice.',
      'Add rice flour, baking powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35 minutes until firm.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-25',
    title: 'Teff Flour Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups teff flour',
      '3/4 cup warm water',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'Teff has a mild, nutty flavor. No sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, water and olive oil in a bowl.',
      'Add teff flour, baking powder, xanthan gum and salt.',
      'Pour into a greased loaf pan.',
      'Let rest 10 minutes.',
      'Bake for 40-45 minutes until firm.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-26',
    title: 'Flaxseed Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup ground flaxseed',
      '1 cup rice flour',
      '1/2 cup water',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon garlic powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'This is a savory, nutty bread. No sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, water and olive oil.',
      'Add ground flaxseed, rice flour, baking powder, garlic powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 30-35 minutes.',
      'Let cool completely before slicing.'
    ]
  },
  {
    id: 'bread-27',
    title: 'Mango Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup mango puree (fresh or frozen)',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Mango is naturally very sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, mango puree, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-28',
    title: 'Sesame Seed Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups rice flour',
      '1/4 cup sesame seeds',
      '3/4 cup warm water',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, water and olive oil.',
      'Add rice flour, baking powder, xanthan gum and salt.',
      'Fold in sesame seeds.',
      'Pour into a greased loaf pan.',
      'Sprinkle extra sesame seeds on top.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-29',
    title: 'Chocolate Chip Banana Bread',
    category: 'bread',
    ingredients: [
      '3 very ripe bananas (mashed)',
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup dairy-free chocolate chips',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Use sugar-free chocolate chips and ripe bananas for natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mash bananas. Add eggs, coconut oil and vanilla.',
      'Stir in oat flour, baking powder and salt.',
      'Fold in chocolate chips.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-30',
    title: 'Buckwheat Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups buckwheat flour',
      '3/4 cup warm water',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'Buckwheat has a rich, earthy flavor. No sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, water and olive oil.',
      'Add buckwheat flour, baking powder, xanthan gum and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-31',
    title: 'Cauliflower Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup cauliflower rice (cooked and drained well)',
      '1 cup almond flour',
      '1 tablespoon baking powder',
      '1 teaspoon garlic powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water. Note: cauliflower bread needs eggs for best binding - egg substitute will make it softer.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Squeeze as much water as possible from cauliflower.',
      'Mix cauliflower with eggs in a bowl.',
      'Add almond flour, baking powder, garlic powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes until golden and firm on top.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-32',
    title: 'Coffee Walnut Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup chopped walnuts',
      '2 cups gluten-free oat flour',
      '1/2 cup strong brewed coffee (cooled)',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Coffee gives a rich bitter note that works well without sugar.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coffee, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Fold in walnuts.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-33',
    title: 'Pineapple Coconut Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup crushed pineapple (drained)',
      '1/2 cup unsweetened shredded coconut',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Pineapple is naturally very sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, pineapple, coconut oil and vanilla.',
      'Add oat flour, baking powder, shredded coconut and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-34',
    title: 'Jalapeño Cornbread',
    category: 'bread',
    ingredients: [
      '2 eggs (optional - see tip)',
      '1 and 1/2 cups gluten-free cornmeal',
      '1/2 cup rice flour',
      '2 jalapeños (seeded and diced)',
      '1 cup unsweetened almond milk',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 2 tablespoons of flaxseed meal mixed with 6 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Mix cornmeal, rice flour, baking powder and salt.',
      'Add eggs, almond milk and olive oil. Mix well.',
      'Fold in diced jalapeños.',
      'Pour into a greased pan.',
      'Bake for 20-25 minutes until golden.',
      'Let cool before cutting.'
    ]
  },
  {
    id: 'bread-35',
    title: 'Date & Nut Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup pitted dates (chopped)',
      '1/2 cup mixed nuts (chopped)',
      '2 cups gluten-free oat flour',
      '1/2 cup hot water',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Dates are very sweet naturally. No added sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Soak dates in hot water for 10 minutes.',
      'Mix eggs, date mixture and coconut oil.',
      'Add oat flour, baking powder, vanilla and salt.',
      'Fold in nuts.',
      'Pour into a greased loaf pan.',
      'Bake for 40-45 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-36',
    title: 'Beet Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup cooked beet (pureed)',
      '1 and 1/2 cups rice flour',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'Beets add a natural earthly sweetness. No sugar needed.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, beet puree and olive oil.',
      'Add rice flour, baking powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-37',
    title: 'Coconut Mango Flatbread',
    category: 'bread',
    ingredients: [
      '2 eggs (optional - see tip)',
      '1/2 cup mango puree',
      '1 cup coconut flour',
      '1/4 cup coconut oil',
      '1 teaspoon baking powder',
      '1/2 teaspoon salt',
      '1 tablespoon sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 2 tablespoons of chia seeds mixed with 6 tablespoons of water.',
      'No sugar? Mango is naturally sweet enough.'
    ],
    instructions: [
      'Mix all ingredients until a soft dough forms.',
      'Let rest 5 minutes (coconut flour absorbs liquid).',
      'Heat a non-stick pan over medium heat.',
      'Shape dough into small flat rounds.',
      'Cook 3-4 minutes each side.',
      'Serve warm.'
    ]
  },
  {
    id: 'bread-38',
    title: 'Amaranth Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup amaranth flour',
      '1 cup rice flour',
      '3/4 cup warm water',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'Amaranth has a mild, slightly nutty taste. No sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, water and olive oil.',
      'Add amaranth flour, rice flour, baking powder, xanthan gum and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-39',
    title: 'Spinach Flatbread',
    category: 'bread',
    ingredients: [
      '2 eggs (optional - see tip)',
      '1 cup fresh spinach (blended smooth)',
      '1 and 1/2 cups rice flour',
      '2 tablespoons olive oil',
      '1/2 cup water',
      '1 teaspoon baking powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 2 tablespoons of chia seeds mixed with 6 tablespoons of water.',
      'This is a savory flatbread, no sugar needed.'
    ],
    instructions: [
      'Blend spinach with water until smooth.',
      'Mix with eggs and olive oil.',
      'Add rice flour, baking powder and salt.',
      'Heat a greased non-stick pan over medium heat.',
      'Pour a ladle of batter and spread thin.',
      'Cook 3 minutes each side.',
      'Serve as a wrap or with soup.'
    ]
  },
  {
    id: 'bread-40',
    title: 'Honey Oat Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '3/4 cup warm water',
      '1/4 cup olive oil',
      '1 tablespoon instant yeast',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt',
      '2 tablespoons honey (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sweetener? Simply omit the honey for a plain savory oat bread.'
    ],
    instructions: [
      'Mix yeast with warm water and honey. Let sit 5 minutes.',
      'Add eggs and olive oil.',
      'Stir in oat flour, xanthan gum and salt.',
      'Pour into a greased loaf pan.',
      'Let rise 30 minutes in a warm spot.',
      'Bake at 375°F (190°C) for 35 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-41',
    title: 'Tomato Basil Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup sun-dried tomatoes (chopped)',
      '1/4 cup fresh basil (chopped)',
      '2 cups rice flour',
      '1/3 cup olive oil',
      '3/4 cup warm water',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, olive oil and water.',
      'Add rice flour, baking powder and salt.',
      'Fold in tomatoes and basil.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-42',
    title: 'Hazelnut Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup hazelnut flour',
      '1 cup rice flour',
      '3/4 cup warm water',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Hazelnut flour has a natural sweetness on its own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, water, coconut oil and vanilla.',
      'Add hazelnut flour, rice flour, baking powder and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-43',
    title: 'Pear & Ginger Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup grated pear',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon ground ginger',
      '1/2 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Pear is naturally sweet enough.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs and coconut oil.',
      'Add grated pear and mix.',
      'Stir in oat flour, baking powder, ginger, cinnamon and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-44',
    title: 'Mushroom & Herb Savory Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup finely chopped mushrooms (sauteed)',
      '2 cups rice flour',
      '1/3 cup olive oil',
      '3/4 cup warm water',
      '1 tablespoon baking powder',
      '1 teaspoon thyme',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Saute mushrooms until golden. Let cool.',
      'Mix eggs, olive oil and water.',
      'Add rice flour, baking powder, thyme and salt.',
      'Fold in mushrooms.',
      'Pour into a greased loaf pan.',
      'Bake at 375°F (190°C) for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-45',
    title: 'Raspberry Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh or frozen raspberries',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/4 cup coconut oil (melted)',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Raspberries and applesauce provide natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Gently fold in raspberries.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-46',
    title: 'Turmeric Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups rice flour',
      '3/4 cup warm water',
      '1/4 cup olive oil',
      '1 tablespoon baking powder',
      '1 teaspoon turmeric',
      '1/2 teaspoon black pepper',
      '1 teaspoon xanthan gum',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory health bread, no sugar needed.'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix eggs, water and olive oil.',
      'Add rice flour, baking powder, turmeric, pepper, xanthan gum and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-47',
    title: 'Coconut Lime Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup unsweetened shredded coconut',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      'Juice and zest of 2 limes',
      '1 tablespoon baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Lime and coconut give a refreshing natural flavor.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, lime juice, zest and vanilla.',
      'Add oat flour, baking powder, shredded coconut and salt.',
      'Pour into a greased loaf pan.',
      'Bake for 35-40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-48',
    title: 'Veggie Loaded Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup grated zucchini',
      '1/2 cup grated carrot',
      '1/4 cup corn kernels',
      '2 cups rice flour',
      '1/3 cup olive oil',
      '3/4 cup warm water',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'This is a savory bread, no sugar needed.'
    ],
    instructions: [
      'Squeeze excess water from zucchini and carrot.',
      'Mix eggs, olive oil and water.',
      'Add rice flour, baking powder and salt.',
      'Fold in all vegetables.',
      'Pour into a greased loaf pan.',
      'Bake at 375°F (190°C) for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-49',
    title: 'Cherry Almond Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup dried cherries (chopped)',
      '1/2 cup slivered almonds',
      '2 cups gluten-free oat flour',
      '1/4 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '1 tablespoon baking powder',
      '1 teaspoon almond extract',
      '1/2 teaspoon salt',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Dried cherries and applesauce are sweet enough.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and almond extract.',
      'Add oat flour, baking powder and salt.',
      'Fold in cherries and almonds.',
      'Pour into a greased loaf pan.',
      'Bake for 40 minutes.',
      'Let cool before slicing.'
    ]
  },
  {
    id: 'bread-50',
    title: 'Classic Gluten-Free White Bread',
    category: 'bread',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups white rice flour',
      '1/2 cup tapioca starch',
      '3/4 cup warm water',
      '1/4 cup olive oil',
      '1 tablespoon instant yeast',
      '1 teaspoon xanthan gum',
      '1 teaspoon apple cider vinegar',
      '1/2 teaspoon salt',
      '1 teaspoon sugar (to activate yeast - optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'The small amount of sugar helps activate yeast. You can omit it but bread may rise less.'
    ],
    instructions: [
      'Mix yeast with warm water and sugar. Let sit 5 minutes until foamy.',
      'Whisk eggs, olive oil and vinegar.',
      'Add rice flour, tapioca starch, xanthan gum and salt.',
      'Add yeast mixture. Mix well until smooth batter forms.',
      'Pour into a greased loaf pan.',
      'Let rise 45-60 minutes in a warm spot.',
      'Bake at 375°F (190°C) for 35-40 minutes until golden.',
      'Let cool completely before slicing.'
    ]
  },

  // PART 2 - CAKES
  {
    id: 'cake-1',
    title: 'Classic Chocolate Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened cocoa powder',
      '1 cup unsweetened applesauce',
      '1/2 cup coconut oil (melted)',
      '1 cup hot water',
      '2 teaspoons baking powder',
      '1 teaspoon baking soda',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Use 1/2 cup of mashed ripe bananas or unsweetened applesauce for natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, cocoa powder, baking powder, baking soda and salt.',
      'Stir in hot water until smooth.',
      'Pour into two greased 9-inch round pans.',
      'Bake for 30-35 minutes.',
      'Let cool completely before frosting.'
    ]
  },
  {
    id: 'cake-2',
    title: 'Banana Cake',
    category: 'cake',
    ingredients: [
      '4 very ripe bananas (mashed)',
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon cinnamon',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Very ripe bananas are sweet enough on their own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mash bananas. Add eggs, coconut oil and vanilla.',
      'Stir in oat flour, baking powder, cinnamon and salt.',
      'Pour into a greased 9-inch round pan.',
      'Bake for 35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-3',
    title: 'Carrot Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups grated carrots',
      '2 cups gluten-free oat flour',
      '1/2 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '2 teaspoons baking powder',
      '2 teaspoons cinnamon',
      '1/2 teaspoon nutmeg',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)',
      '1/2 cup chopped walnuts (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Carrots and applesauce provide natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil and applesauce.',
      'Add carrots and mix.',
      'Stir in oat flour, baking powder, cinnamon, nutmeg and salt.',
      'Fold in walnuts if using.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-4',
    title: 'Lemon Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/3 cup coconut oil (melted)',
      'Juice and zest of 2 lemons',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Add an extra tablespoon of lemon zest for more brightness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil, lemon juice, zest and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-5',
    title: 'Vanilla Birthday Cake',
    category: 'cake',
    ingredients: [
      '4 eggs (optional - see tip)',
      '2 and 1/2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      '1/3 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '2 teaspoons vanilla extract',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 4 tablespoons of flaxseed meal mixed with 12 tablespoons of water.',
      'No sugar? Use 1/2 cup of unsweetened applesauce instead.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Beat eggs, coconut oil, almond milk and vanilla together.',
      'Add almond flour, baking powder and salt.',
      'Pour into two greased 9-inch round pans.',
      'Bake for 30-35 minutes.',
      'Let cool completely before frosting.'
    ]
  },
  {
    id: 'cake-6',
    title: 'Apple Spice Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups grated apple (peeled)',
      '2 cups gluten-free oat flour',
      '1/2 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '2 teaspoons cinnamon',
      '1/4 teaspoon cloves',
      '1/4 teaspoon nutmeg',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Apples are naturally sweet, especially when grated.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs and coconut oil.',
      'Add grated apple and mix.',
      'Stir in oat flour, baking powder and all spices.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-7',
    title: 'Strawberry Shortcake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh strawberries (mashed)',
      '2 cups gluten-free oat flour',
      '1/2 cup coconut oil (melted)',
      '1/4 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Strawberries add natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, almond milk, mashed strawberries and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before topping with fresh sliced strawberries.'
    ]
  },
  {
    id: 'cake-8',
    title: 'Orange Almond Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      'Juice and zest of 2 oranges',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Fresh orange juice is naturally sweet enough.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, orange juice, zest and vanilla.',
      'Add almond flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-9',
    title: 'Pineapple Upside-Down Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 can (20 oz) pineapple slices in juice (drained)',
      '2 cups gluten-free oat flour',
      '1/2 cup coconut oil (melted)',
      '1/2 cup pineapple juice (from the can)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Pineapple juice provides natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Grease a 9-inch round pan. Arrange pineapple slices on the bottom.',
      'Mix eggs, coconut oil, pineapple juice and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Pour batter over pineapple slices.',
      'Bake for 35-40 minutes.',
      'Let cool 10 minutes then carefully flip onto a plate.'
    ]
  },
  {
    id: 'cake-10',
    title: 'Pumpkin Spice Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup unsweetened pumpkin puree',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '2 teaspoons pumpkin pie spice',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Pumpkin puree has a mild sweetness. Add 2 tablespoons of maple syrup if desired.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, pumpkin puree, coconut oil and vanilla.',
      'Add oat flour, baking powder, pumpkin spice and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-11',
    title: 'Coconut Cake',
    category: 'cake',
    ingredients: [
      '4 eggs (optional - see tip)',
      '1 and 1/2 cups coconut flour',
      '1 cup full-fat coconut milk',
      '1/2 cup coconut oil (melted)',
      '1/2 cup unsweetened shredded coconut',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 4 tablespoons of chia seeds mixed with 12 tablespoons of water.',
      'No sugar? Coconut milk adds a natural creaminess and mild sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut milk, coconut oil and vanilla.',
      'Add coconut flour, baking powder and salt.',
      'Fold in shredded coconut.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-12',
    title: 'Mango Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup mango puree',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/4 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Mango puree is naturally very sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, mango puree, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-13',
    title: 'Blueberry Coffee Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh or frozen blueberries',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon cinnamon',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Blueberries and applesauce are naturally sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, baking powder, cinnamon and salt.',
      'Gently fold in blueberries.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before serving.'
    ]
  },
  {
    id: 'cake-14',
    title: 'Red Velvet Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/4 cup unsweetened cocoa powder',
      '1 cup unsweetened applesauce',
      '1/3 cup coconut oil (melted)',
      '2 tablespoons beet powder (for color)',
      '2 teaspoons baking powder',
      '1 teaspoon apple cider vinegar',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Use 1/2 cup of mashed ripe bananas for natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil, vinegar and vanilla.',
      'Add oat flour, cocoa, beet powder, baking powder and salt.',
      'Pour into two greased 9-inch round pans.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-15',
    title: 'Almond Joy Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      '1/2 cup unsweetened cocoa powder',
      '1 cup full-fat coconut milk',
      '1/3 cup coconut oil (melted)',
      '1/2 cup unsweetened shredded coconut',
      '1/2 cup slivered almonds',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Use 3 tablespoons of maple syrup or omit entirely.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut milk, coconut oil and vanilla.',
      'Add almond flour, cocoa, baking powder and salt.',
      'Fold in shredded coconut and almonds.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-16',
    title: 'Peach Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 and 1/2 cups fresh or canned peaches (diced, drained)',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Ripe peaches are naturally very sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, baking powder, cinnamon and salt.',
      'Fold in peaches.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before serving.'
    ]
  },
  {
    id: 'cake-17',
    title: 'Espresso Chocolate Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      '1/2 cup unsweetened cocoa powder',
      '1/2 cup strong brewed espresso (cooled)',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Espresso brings a deep, rich flavor that works without added sugar.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, espresso, coconut oil and vanilla.',
      'Add almond flour, cocoa, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-18',
    title: 'Cherry Chocolate Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup pitted cherries (fresh or frozen)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened cocoa powder',
      '1 cup unsweetened applesauce',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Cherries and applesauce provide natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, cocoa, baking powder and salt.',
      'Fold in cherries.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-19',
    title: 'Sweet Potato Spice Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup mashed sweet potato',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon cinnamon',
      '1/2 teaspoon ginger',
      '1/4 teaspoon cloves',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Sweet potato is naturally sweet. Add 2 tablespoons of maple syrup if desired.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, sweet potato and coconut oil.',
      'Add oat flour, baking powder and all spices.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-20',
    title: 'Raspberry Lemon Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh raspberries',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      'Juice and zest of 1 lemon',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Raspberries and lemon make a bright, flavorful cake on their own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, lemon juice, zest and vanilla.',
      'Add almond flour, baking powder and salt.',
      'Gently fold in raspberries.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-21',
    title: 'Zucchini Chocolate Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup grated zucchini (squeezed dry)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened cocoa powder',
      '1/3 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Use 1/2 cup of mashed ripe banana instead.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add grated zucchini and mix.',
      'Stir in oat flour, cocoa, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-22',
    title: 'Almond Flour Coffee Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      '1/3 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '2 teaspoons cinnamon',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)',
      'Streusel Topping: 1/2 cup almond flour, 2 tablespoons coconut oil, 1 teaspoon cinnamon, 1 tablespoon sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Almond flour has a natural mild sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix all cake ingredients in a bowl.',
      'Pour into a greased 9-inch pan.',
      'Mix streusel ingredients and sprinkle on top.',
      'Bake for 35 minutes.',
      'Let cool before serving.'
    ]
  },
  {
    id: 'cake-23',
    title: 'Double Chocolate Fudge Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup unsweetened cocoa powder',
      '1 cup almond flour',
      '1 cup unsweetened applesauce',
      '1/2 cup coconut oil (melted)',
      '1/2 cup dairy-free chocolate chips',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Use sugar-free chocolate chips and mashed ripe banana.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add almond flour, cocoa, baking powder and salt.',
      'Fold in chocolate chips.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-24',
    title: 'Ginger Spice Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/3 cup coconut oil (melted)',
      '2 tablespoons fresh grated ginger',
      '2 teaspoons baking powder',
      '1 teaspoon cinnamon',
      '1/2 teaspoon cloves',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Ginger and cinnamon are bold flavors that shine without sugar.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and ginger.',
      'Add oat flour, baking powder, cinnamon, cloves and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-25',
    title: 'Hazelnut Chocolate Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup hazelnut flour',
      '1 cup almond flour',
      '1/2 cup unsweetened cocoa powder',
      '1/2 cup coconut oil (melted)',
      '1/2 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Hazelnut flour has a rich, natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, almond milk, coconut oil and vanilla.',
      'Add hazelnut flour, almond flour, cocoa, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-26',
    title: 'Pecan Pie Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup chopped pecans',
      '2 cups gluten-free oat flour',
      '1/2 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)',
      '2 tablespoons maple syrup (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Pecans and maple syrup give natural caramel-like sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil, vanilla and maple syrup.',
      'Add oat flour, baking powder, cinnamon and salt.',
      'Fold in pecans.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-27',
    title: 'Birthday Funfetti Cake',
    category: 'cake',
    ingredients: [
      '4 eggs (optional - see tip)',
      '2 and 1/2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      '1/3 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '2 teaspoons vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)',
      '1/4 cup natural sprinkles (sugar-free if preferred)'
    ],
    tips: [
      'No eggs? Use 4 tablespoons of chia seeds mixed with 12 tablespoons of water.',
      'No sugar? Use 1/3 cup unsweetened applesauce instead.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, almond milk and vanilla.',
      'Add almond flour, baking powder and salt.',
      'Gently fold in sprinkles.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-28',
    title: 'Blackberry Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh blackberries',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Blackberries and applesauce provide natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Gently fold in blackberries.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-29',
    title: 'Tres Leches-Style Cake (Dairy-Free)',
    category: 'cake',
    ingredients: [
      '4 eggs (optional - see tip)',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)',
      'Soaking Liquid: 1 cup full-fat coconut milk, 1/2 cup unsweetened almond milk, 1 teaspoon vanilla extract'
    ],
    tips: [
      'No eggs? Use 4 tablespoons of flaxseed meal mixed with 12 tablespoons of water.',
      'No sugar? The coconut milk soaking liquid is naturally creamy and sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix all cake ingredients.',
      'Pour into a greased 9x13-inch pan.',
      'Bake for 25-30 minutes. Let cool 15 minutes.',
      'Poke holes all over the cake with a fork.',
      'Mix soaking liquid and pour slowly over cake.',
      'Refrigerate 2 hours before serving.'
    ]
  },
  {
    id: 'cake-30',
    title: 'Maple Walnut Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup chopped walnuts',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '1/4 cup pure maple syrup (optional)',
      '1/4 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sweetener? The walnuts give a rich, satisfying flavor without any sweetener.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, maple syrup, almond milk and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Fold in walnuts.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-31',
    title: 'Lime Coconut Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup unsweetened shredded coconut',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      'Juice and zest of 3 limes',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Lime and coconut create a refreshing, tropical flavor without sugar.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, lime juice, zest and vanilla.',
      'Add almond flour, baking powder and salt.',
      'Fold in shredded coconut.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-32',
    title: 'Matcha Green Tea Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      '2 tablespoons matcha powder',
      '1/3 cup coconut oil (melted)',
      '1/3 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Matcha has a distinct, earthy flavor that stands well on its own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, almond milk and vanilla.',
      'Add almond flour, matcha, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-33',
    title: 'Cranberry Orange Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup dried cranberries',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      'Juice and zest of 2 oranges',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Cranberries and orange juice provide tartness and natural sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, orange juice, zest and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Fold in cranberries.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-34',
    title: 'Brown Sugar Cinnamon Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened applesauce',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '2 teaspoons cinnamon',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup coconut sugar (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Add extra cinnamon and a dash of vanilla for rich flavor.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, baking powder, cinnamon and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-35',
    title: 'Tropical Fruit Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup diced pineapple',
      '1/2 cup diced mango',
      '1/2 cup unsweetened shredded coconut',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Tropical fruits are naturally very sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Fold in pineapple, mango and shredded coconut.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-36',
    title: 'Tahini Honey Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup tahini',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      '1/4 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons honey (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sweetener? Tahini adds richness and depth without needing sugar.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, tahini, coconut oil, almond milk, vanilla and honey.',
      'Add almond flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before serving.'
    ]
  },
  {
    id: 'cake-37',
    title: 'Peanut Butter Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1/2 cup natural peanut butter (no added sugar)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened almond milk',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Peanut butter is rich and satisfying without added sweetener.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, peanut butter, almond milk, coconut oil and vanilla.',
      'Add oat flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-38',
    title: 'Avocado Chocolate Cake',
    category: 'cake',
    ingredients: [
      '2 ripe avocados (mashed smooth)',
      '3 eggs (optional - see tip)',
      '1 cup unsweetened cocoa powder',
      '1 cup almond flour',
      '1/4 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Avocado makes this cake incredibly rich and creamy without sugar.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Blend avocados until completely smooth.',
      'Mix with eggs, coconut oil and vanilla.',
      'Add almond flour, cocoa, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-39',
    title: 'Caramelized Banana Upside-Down Cake',
    category: 'cake',
    ingredients: [
      '3 ripe bananas (sliced)',
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '1 teaspoon cinnamon',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '3 tablespoons coconut sugar (optional - for topping)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Bananas caramelize naturally in the oven.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Grease a 9-inch round pan. Arrange banana slices on the bottom.',
      'Sprinkle with coconut sugar if using.',
      'Mix eggs, coconut oil and vanilla.',
      'Add oat flour, baking powder, cinnamon and salt.',
      'Pour batter over bananas.',
      'Bake for 35-40 minutes.',
      'Let cool 10 minutes then flip onto a plate.'
    ]
  },
  {
    id: 'cake-40',
    title: 'Lavender Lemon Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      'Juice and zest of 2 lemons',
      '1 tablespoon dried culinary lavender',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Lavender and lemon are elegant flavors on their own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, lemon juice, zest and vanilla.',
      'Add almond flour, lavender, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-41',
    title: 'Fudgy Brownie Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup unsweetened cocoa powder',
      '1 cup almond flour',
      '3/4 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/2 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Use 1/2 cup mashed ripe banana for fudgy sweetness.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add almond flour, cocoa, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 25-30 minutes. Do not overbake - center should be slightly fudgy.',
      'Let cool completely before cutting.'
    ]
  },
  {
    id: 'cake-42',
    title: 'Banana Foster Cake',
    category: 'cake',
    ingredients: [
      '3 very ripe bananas (mashed)',
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon cinnamon',
      '1/2 teaspoon nutmeg',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '2 tablespoons maple syrup (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sweetener? Very ripe bananas are sweet and flavorful enough.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mash bananas. Add eggs, coconut oil, vanilla and maple syrup.',
      'Add oat flour, baking powder, cinnamon and nutmeg.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-43',
    title: 'Honey Almond Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      '1/4 cup unsweetened almond milk',
      '1 teaspoon almond extract',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '3 tablespoons honey (optional)',
      '1/2 cup slivered almonds (for topping)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sweetener? Almond flour is naturally mild and sweet.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, almond milk, almond extract and honey.',
      'Add almond flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Top with slivered almonds.',
      'Bake for 30-35 minutes.',
      'Let cool before serving.'
    ]
  },
  {
    id: 'cake-44',
    title: 'Date Caramel Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup pitted dates (soaked in hot water 10 min, blended)',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'Dates act as the sweetener here. No added sugar needed at all.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Blend soaked dates into a smooth paste.',
      'Mix eggs, date paste and coconut oil.',
      'Add oat flour, baking powder, vanilla and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-45',
    title: 'Rose Water Almond Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      '1/4 cup unsweetened almond milk',
      '1 tablespoon rose water',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Rose water is fragrant and makes the cake feel special even without sweetener.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, almond milk and rose water.',
      'Add almond flour, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-46',
    title: 'Spiced Apple Upside-Down Cake',
    category: 'cake',
    ingredients: [
      '2 apples (peeled, cored, thinly sliced)',
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '1/2 cup unsweetened applesauce',
      '2 teaspoons baking powder',
      '2 teaspoons cinnamon',
      '1/2 teaspoon nutmeg',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '2 tablespoons coconut sugar (optional - for base)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Apples caramelize beautifully on their own.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Grease a 9-inch pan. Sprinkle coconut sugar on the bottom if using.',
      'Arrange apple slices on the bottom.',
      'Mix eggs, applesauce, coconut oil and vanilla.',
      'Add oat flour, baking powder, cinnamon, nutmeg and salt.',
      'Pour batter over apples.',
      'Bake for 40 minutes.',
      'Cool 10 minutes then flip onto a plate.'
    ]
  },
  {
    id: 'cake-47',
    title: 'Toffee Pear Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 ripe pears (peeled and diced)',
      '2 cups gluten-free oat flour',
      '1/3 cup coconut oil (melted)',
      '1/4 cup unsweetened almond milk',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon cinnamon',
      '1/2 teaspoon salt',
      '3 tablespoons maple syrup (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sweetener? Pears are very sweet when ripe.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, almond milk, vanilla and maple syrup.',
      'Add oat flour, baking powder, cinnamon and salt.',
      'Fold in diced pears.',
      'Pour into a greased 9-inch pan.',
      'Bake for 35-40 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-48',
    title: 'Chocolate Beet Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup cooked beet (pureed)',
      '1 cup unsweetened cocoa powder',
      '1 cup almond flour',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Beets add a natural earthly sweetness to the chocolate.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, beet puree, coconut oil and vanilla.',
      'Add almond flour, cocoa, baking powder and salt.',
      'Pour into a greased 9-inch pan.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting.'
    ]
  },
  {
    id: 'cake-49',
    title: 'Lemon Blueberry Loaf Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '1 cup fresh blueberries',
      '2 cups almond flour',
      '1/3 cup coconut oil (melted)',
      'Juice and zest of 2 lemons',
      '2 teaspoons baking powder',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of chia seeds mixed with 9 tablespoons of water.',
      'No sugar? Blueberries and lemon make a naturally vibrant cake.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, coconut oil, lemon juice, zest and vanilla.',
      'Add almond flour, baking powder and salt.',
      'Gently fold in blueberries.',
      'Pour into a greased loaf pan.',
      'Bake for 40-45 minutes.',
      'Let cool before drizzling with lemon glaze (see frosting section).'
    ]
  },
  {
    id: 'cake-50',
    title: 'Chocolate Mint Cake',
    category: 'cake',
    ingredients: [
      '3 eggs (optional - see tip)',
      '2 cups gluten-free oat flour',
      '1/2 cup unsweetened cocoa powder',
      '1 cup unsweetened applesauce',
      '1/3 cup coconut oil (melted)',
      '2 teaspoons baking powder',
      '1 teaspoon peppermint extract',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon salt',
      '1/3 cup sugar or sweetener (optional)'
    ],
    tips: [
      'No eggs? Use 3 tablespoons of flaxseed meal mixed with 9 tablespoons of water.',
      'No sugar? Peppermint is a strong, refreshing flavor that works well without sugar.'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C).',
      'Mix eggs, applesauce, coconut oil, peppermint and vanilla.',
      'Add oat flour, cocoa, baking powder and salt.',
      'Pour into two greased 9-inch round pans.',
      'Bake for 30-35 minutes.',
      'Let cool before frosting with chocolate or mint frosting.'
    ]
  },

  // PART 3 - FROSTINGS
  {
    id: 'frosting-1',
    title: 'Classic Chocolate Frosting',
    category: 'frosting',
    ingredients: [
      '1 cup dairy-free dark chocolate chips',
      '1/2 cup full-fat coconut milk',
      '2 tablespoons coconut oil',
      '1 teaspoon vanilla extract',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No sugar? Dark chocolate chips already have enough richness on their own.'
    ],
    instructions: [
      'Heat coconut milk in a small saucepan over low heat.',
      'Add chocolate chips and stir until completely melted.',
      'Remove from heat. Add coconut oil and vanilla.',
      'Let cool to room temperature.',
      'Stir well. It will thicken as it cools.',
      'Spread or pour over cake.',
      'Refrigerate cake after frosting.'
    ]
  },
  {
    id: 'frosting-2',
    title: 'Whipped Coconut Cream Frosting',
    category: 'frosting',
    ingredients: [
      '2 cans (13.5 oz each) full-fat coconut milk (refrigerated overnight)',
      '1 teaspoon vanilla extract',
      '2 tablespoons powdered sugar or sweetener (optional)'
    ],
    tips: [
      'No sugar? Whipped coconut cream is naturally creamy and works beautifully without sweetener.'
    ],
    instructions: [
      'Open cans and scoop out the solid cream only (discard liquid or save for smoothies).',
      'Beat with a hand mixer on high for 3-4 minutes until fluffy.',
      'Add vanilla and sweetener if using. Mix well.',
      'Use immediately or refrigerate until ready to use.',
      'Store frosted cake in the refrigerator.'
    ]
  },
  {
    id: 'frosting-3',
    title: 'Vanilla Cashew Cream Frosting',
    category: 'frosting',
    ingredients: [
      '1 and 1/2 cups raw cashews (soaked in water 4 hours, drained)',
      '1/4 cup full-fat coconut milk',
      '2 tablespoons coconut oil (melted)',
      '2 teaspoons vanilla extract',
      'Juice of 1/2 lemon',
      '2 tablespoons maple syrup (optional)'
    ],
    tips: [
      'No sweetener? The cashews and vanilla make a naturally smooth, mild frosting.'
    ],
    instructions: [
      'Blend all ingredients in a high-speed blender until completely smooth.',
      'Add more coconut milk if needed for spreading consistency.',
      'Refrigerate 1 hour to firm up before using.',
      'Spread on cooled cake.',
      'Store frosted cake in the refrigerator.'
    ]
  },
  {
    id: 'frosting-4',
    title: 'Strawberry Frosting',
    category: 'frosting',
    ingredients: [
      '1 cup fresh strawberries (pureed)',
      '1 cup raw cashews (soaked 4 hours, drained)',
      '1/4 cup coconut oil (melted)',
      '1 teaspoon vanilla extract',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No sugar? Ripe strawberries are naturally sweet enough.'
    ],
    instructions: [
      'Puree strawberries in a blender.',
      'Add cashews, coconut oil and vanilla.',
      'Blend until completely smooth and creamy.',
      'Refrigerate 1 hour to firm up.',
      'Spread on cooled cake.'
    ]
  },
  {
    id: 'frosting-5',
    title: 'Lemon Glaze Frosting',
    category: 'frosting',
    ingredients: [
      '1 cup powdered coconut sugar or powdered sweetener',
      '3-4 tablespoons fresh lemon juice',
      '1 teaspoon lemon zest',
      '1 tablespoon coconut oil (melted)'
    ],
    tips: [
      'No sugar? Drizzle straight lemon juice mixed with coconut oil for a simple, tangy glaze.'
    ],
    instructions: [
      'Mix powdered sweetener and lemon juice until smooth.',
      'Add lemon zest and coconut oil.',
      'Adjust consistency with more lemon juice if needed.',
      'Drizzle over cooled cake.',
      'Let set for 15 minutes before serving.'
    ]
  },
  {
    id: 'frosting-6',
    title: 'Peanut Butter Frosting',
    category: 'frosting',
    ingredients: [
      '1 cup natural peanut butter (no added sugar)',
      '1/3 cup full-fat coconut milk',
      '2 tablespoons coconut oil (melted)',
      '1 teaspoon vanilla extract',
      '2 tablespoons maple syrup (optional)'
    ],
    tips: [
      'No sweetener? Natural peanut butter is rich and flavorful on its own.'
    ],
    instructions: [
      'Mix all ingredients together until smooth and creamy.',
      'Add more coconut milk for a thinner consistency.',
      'Spread on cooled cake.',
      'Store frosted cake in the refrigerator.'
    ]
  },
  {
    id: 'frosting-7',
    title: 'Avocado Chocolate Frosting',
    category: 'frosting',
    ingredients: [
      '2 ripe avocados',
      '1/2 cup unsweetened cocoa powder',
      '1/4 cup full-fat coconut milk',
      '1 teaspoon vanilla extract',
      '3 tablespoons maple syrup (optional)'
    ],
    tips: [
      'No sweetener? Avocado makes this frosting incredibly rich and creamy without any added sugar.'
    ],
    instructions: [
      'Blend all ingredients until completely smooth and creamy.',
      'Taste and adjust cocoa or sweetener to preference.',
      'Spread on cooled cake immediately.',
      'Store frosted cake in the refrigerator.',
      'Best used the same day.'
    ]
  },
  {
    id: 'frosting-8',
    title: 'Mango Coconut Frosting',
    category: 'frosting',
    ingredients: [
      '1 cup mango puree (fresh or frozen)',
      '1 cup full-fat coconut milk (refrigerated, solid part only)',
      '1 teaspoon vanilla extract',
      '1 tablespoon sugar or sweetener (optional)'
    ],
    tips: [
      'No sugar? Mango is naturally very sweet and tropical.'
    ],
    instructions: [
      'Scoop solid coconut cream and beat until fluffy.',
      'Blend in mango puree and vanilla.',
      'Mix until smooth and creamy.',
      'Refrigerate 30 minutes to firm up.',
      'Spread on cooled cake.',
      'Store frosted cake in the refrigerator.'
    ]
  },
  {
    id: 'frosting-9',
    title: 'Date Caramel Frosting',
    category: 'frosting',
    ingredients: [
      '1 cup pitted Medjool dates (soaked in hot water 15 min)',
      '1/4 cup full-fat coconut milk',
      '2 tablespoons coconut oil (melted)',
      '1 teaspoon vanilla extract',
      '1/4 teaspoon sea salt'
    ],
    tips: [
      'Dates are the sweetener here. No added sugar needed at all.'
    ],
    instructions: [
      'Drain soaked dates.',
      'Blend all ingredients until completely smooth.',
      'Add more coconut milk for a thinner consistency.',
      'Let cool to room temperature.',
      'Spread on cooled cake.',
      'Store frosted cake in the refrigerator.'
    ]
  },
  {
    id: 'frosting-10',
    title: 'Raspberry Frosting',
    category: 'frosting',
    ingredients: [
      '1 cup fresh or frozen raspberries',
      '1 cup raw cashews (soaked 4 hours, drained)',
      '3 tablespoons coconut oil (melted)',
      '1 teaspoon vanilla extract',
      '2 tablespoons sugar or sweetener (optional)'
    ],
    tips: [
      'No sugar? Raspberries give a natural tartness and vibrant color without any sweetener.'
    ],
    instructions: [
      'Blend raspberries and strain to remove seeds (optional).',
      'Blend strained raspberries with cashews, coconut oil and vanilla.',
      'Blend until completely smooth and creamy.',
      'Refrigerate 1 hour to firm up.',
      'Spread on cooled cake.',
      'Store frosted cake in the refrigerator.'
    ]
  },
  {
    id: 'dessert-1',
    title: 'Loading Desserts...',
    category: 'dessert',
    ingredients: ['Recipes coming soon!'],
    instructions: ['Stay tuned for delicious gluten-free desserts.']
  },
  {
    id: 'essential-1',
    title: 'Loading Essential Guide...',
    category: 'essential',
    ingredients: ['Guides coming soon!'],
    instructions: ['Master the art of gluten-free baking with our upcoming guides.']
  }
];
