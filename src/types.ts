export interface Recipe {
  id: string;
  title: string;
  category: 'bread' | 'cake' | 'frosting';
  ingredients: string[];
  instructions: string[];
  tips?: string[];
}
