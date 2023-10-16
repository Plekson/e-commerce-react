import Cookie from "js-cookie";
import { Product } from "../api/productType";
import { Color } from "../api/colorType";

export const addToCart = (product: Product, selectedColor: Color): void => {
  // Get existing cart data from cookies
  const existingCart = Cookie.get("cart");
  
  // Parse existing cart data or create an empty array
  const cart = existingCart ? JSON.parse(existingCart) : [];
  
  // Check if the product is already in the cart
  const isProductInCart = cart.some((item: Product) => item.id === product.id);

  if (!isProductInCart) {
    // Add the product to the cart with selected color
    const updatedCart = [...cart, { ...product, selectedColor }];

    // Store the updated cart in cookies
    Cookie.set("cart", JSON.stringify(updatedCart), { expires: 365 });
  
    console.log("Product added to the cart:", updatedCart);
  } else {
    console.log("Product is already in the cart");
  }
};