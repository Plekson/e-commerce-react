import Hero from "../containers/Hero";
import Navbar2 from "../containers/Navbar";
import React from "react";
import ProductFilters from "../containers/ProductFilters";
import Products from "../containers/Products";
import Sample from "../containers/sample";
import ProductList from "../containers/ProductList";

const Bluzy = () => {
  return (
    <div className="max-w-[96rem] mx-auto">
      <Navbar2 />
      <Hero />
      <div>
        <ProductFilters />
      </div>

      <div className="my-4 md:p-5 p-2 bg-white lg:rounded-lg mx-auto">
        <h1 className="my-4 text-2xl font-semibold">Bluzy</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Bluzy;
