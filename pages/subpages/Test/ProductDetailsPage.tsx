import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Product, getProducts } from '@/pages/api/SpringApi/getProducts';

const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (typeof productId === 'string') {
          const productDetails = await getProducts(parseInt(productId, 10));

          const singleProduct = Array.isArray(productDetails) ? productDetails[0] : productDetails;

          setProduct(singleProduct);
          setSelectedColor(singleProduct.colors[0].color_name);
        }
      } catch (error) {
        console.error('Blad pobierania danych:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleColorClick = (colorName: string) => {
    setSelectedColor(colorName);
  };

  if (!product) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 flex">
      <div className="w-1/3 mr-8">
        <h2 className="text-xl font-bold mb-2">Choose Color:</h2>
        <ul>
        {product.colors.map((color) => (
      <li
        key={color.color_id}
        className="mb-2"
        onClick={() => handleColorClick(color.color_name)}
      >
        <img
          src={color.images.find((image) => image.typZdj === 'MAIN')?.image_url || ''}
          alt={`Color - ${color.color_name}`}
          className={`cursor-pointer w-12 h-12 object-cover border ${
            selectedColor === color.color_name ? 'border-gray-700' : 'border-gray-300'
          }`}
        />
      </li>
    ))}
        </ul>
      </div>
      <div className="w-2/3">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div>
          <h2 className="text-xl font-bold mb-2">Product Showcase:</h2>
          <div>
          {product.colors
      .filter((color) => color.color_name === selectedColor)
      .map((color) => (
        <div key={color.color_id} className="mb-2">
          {color.images.map((image) => (
            <img
              key={image.image_id}
              src={image.image_url}
              alt={`${image.typZdj} - ${color.color_name}`}
              className="cursor-pointer w-48 h-48 object-cover border border-gray-300 mr-2"
            />
          ))}
        </div>
      ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Sizes:</h2>
          <ul>
            {product.colors
              .filter((color) => color.color_name === selectedColor)
              .map((color) =>
                color.sizes.map((size) => (
                  <li key={size.size_id} className="mb-1">
                    {size.size_name} - Quantity: {size.quantity}
                  </li>
                ))
              )}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Category:</h2>
          <p>{product.category.name}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Product Reviews:</h2>
          <ul>
            {product.productReviews.map((review) => (
              <li key={review.id} className="mb-4">
                <p className="font-semibold mb-1">User: {review.userName}</p>
                <p className="mb-1">Rating: {review.starRating}</p>
                <p>{review.reviewText}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;