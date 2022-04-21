import React from "react";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import Featured from "../../components/Featured/Featured";
import DiscountInfo from "../../components/DiscountInfo/DiscountInfo";
import About from "../../components/About/About";
import Categories from "../../components/Categories/Categories";

const Home = ({ search, setSearch }) => {
  return (
    <div style={{ display: "flex", flexFlow: "column", gap: "3rem" }}>
      <Hero />
      <Categories search={search} setSearch={setSearch} />
      <SearchBar search={search} setSearch={setSearch} />
      <Featured search={search} />
      <About />
      <DiscountInfo />
    </div>
  );
};

export default Home;
