import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product, getProducts } from '@/pages/api/SpringApi/getProducts';

const AllProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await getProducts();
        console.log('Received data:', response);

        // Assuming 'content' is the array of products
        if (response.content) {
          setProducts(response.content);
        } else {
          console.error('No content property found in the response:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            <Link href={`/subpages/Test/ProductDetailsPage?productId=${product.product_id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductsPage;
