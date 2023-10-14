import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar2 from "../containers/Navbar";
import ProductGallery from "../containers/ProductGallery";
import ProductDesc from "../containers/ProductDesc";
import Sample from "../containers/sample";

// Interfejs dla danych produktu
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string[];
  // Dodaj inne właściwości, jeśli są dostępne
}

const ItemPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = router.query.id; // Zmień na router.query.id
  
        if (productId) {
          console.log(`Fetching product. Product ID: ${productId}`);
  
          const response = await fetch(`/api/${productId}`); // Zmień na /api/product/${productId}
          const data: Product = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    // Wywołaj fetchProduct przy starcie komponentu
    fetchProduct();
  }, [router.query.id]); // Zmień na router.query.id

  console.log('Render. Product:', product);

  if (product === null) {
    return <div>Loading...</div>;
  }

  // Dodaj console log przed przekazaniem danych do ProductGallery
  console.log('Data sent to ProductGallery:', product.image);
  console.log(product)

  return (
    <div className="max-w-[96rem] mx-auto">
      <Navbar2 />
      <div className="md:mt-[calc(61px+1.25rem)] mt-[calc(105px+1.25rem)] lg:flex">
        <ProductGallery image={product.image} />
        {/* Przekazujesz product.images do komponentu ProductDesc */}
        <ProductDesc product={product} />
      </div>
      <Sample title="Podobne" />
      <Sample title="Ostatnio przeglądane" />
    </div>
  );
};

export default ItemPage;
