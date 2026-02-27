export interface Recipe {
  id: string;
  title: string;
  category: 'bread' | 'cake' | 'frosting' | 'dessert' | 'essential';
  ingredients: string[];
  instructions: string[];
  tips?: string[];
}
