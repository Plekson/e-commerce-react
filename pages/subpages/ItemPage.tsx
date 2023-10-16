import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar2 from "../containers/Header/Navbar";
import ProductGallery from "../containers/Product/ProductGallery";
import ProductDesc from "../containers/Product/ProductDesc";
import Products from "../containers/Product/Products";
import { Product } from '../api/productType';

const ItemPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = router.query.id;
  
        if (productId) {
          console.log(`Fetching product. Product ID: ${productId}`);
  
          const response = await fetch(`/api/${productId}`);
          const data: Product = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [router.query.id]);

  console.log('Render. Product:', product);

  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[96rem] mx-auto">
      <Navbar2 />
      <div className="md:mt-[calc(61px+1.25rem)] mt-[calc(105px+1.25rem)] lg:flex">
        <ProductGallery image={product.image} />
        <ProductDesc product={product} />
      </div>
      <Products title="Podobne" />
      <Products title="Ostatnio przeglądane" />
    </div>
  );
};

export default ItemPage;
