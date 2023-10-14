import React from "react";
import Navbar2 from "../containers/Navbar";
import ProductGallery from "../containers/ProductGallery";
import ProductDesc from "../containers/ProductDesc";
import Sample from "../containers/sample";

const imageUrls = [
  "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const ItemPage = () => {
  return (
    <div className="max-w-[96rem] mx-auto">
      <Navbar2 />
      <div className="md:mt-[calc(61px+1.25rem)] mt-[calc(105px+1.25rem)] lg:flex">
        <ProductGallery images={imageUrls} />
        <ProductDesc images={imageUrls} />
      </div>
      <Sample title="Podobne" />
      <Sample title="Ostatnio przeglądane" />
    </div>
  );
};

export default ItemPage;
