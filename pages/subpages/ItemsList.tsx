import { useRouter } from "next/router";
import Hero from "../containers/Hero/Hero";
import Navbar2 from "../containers/Header/Navbar";
import React from "react";
import ProductFilters from "../components/Product/ProductFilters";
import ProductList from "../containers/Product/ProductList";


const ItemsList = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="max-w-[96rem] mx-auto">
      <Navbar2 />
      <Hero />
      <div>
        <ProductFilters />
      </div>

      <div className="my-4 md:p-5 p-2 bg-white lg:rounded-lg mx-auto">
        <h1 className="my-4 text-2xl font-semibold capitalize">
          {category ? `${category}` : "Wszystkie Produkty"}
        </h1>
        <ProductList selectedCategory={category as string} />
      </div>
    </div>
  );
};

export default ItemsList;
