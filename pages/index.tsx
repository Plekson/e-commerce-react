import { Inter } from "next/font/google";
import Navbar from "./containers/Header/Navbar";
import Hero from "./containers/Hero/Hero";
import Sample from "./containers/Product/Products";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => (
  <div className="max-w-[96rem] mx-auto">
    <Navbar />
    <Hero />
    <Sample title="Polecane" />
    <Sample title="Butki" />
    <Sample title="elo melo" />
  </div>
);

export default Home;
