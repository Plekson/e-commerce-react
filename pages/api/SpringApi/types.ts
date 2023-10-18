// types.ts

export interface Product {
    product_id: number;
    name: string;
    description: string;
    price: number;
    colors: Color[];
    category: Category;
    productReviews: ProductReview[];
  }
  
  export interface Color {
    color_id: number;
    color_name: string;
    images: Image[];
    sizes: Size[];
  }
  
  export interface Image {
    image_id: number;
    image_url: string;
    typZdj: string;
  }
  
  export interface Size {
    size_id: number;
    size_name: string;
    quantity: number;
  }
  
  export interface Category {
    category_id: number;
    name: string;
    description: string;
    created_at: string;
    modified_at: string;
  }
  
  export interface ProductReview {
    id: number | null;
    userName: string | null;
    reviewText: string | null;
    starRating: number;
  }
  