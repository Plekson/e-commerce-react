import { Color } from './colorType';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    selectedColor?: Color;
  }