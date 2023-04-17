import React from "react";
import "./Home.css";
import CatList from "../CatList";

const Home = () => {
  return (
    <div>
      <header>
        <h2>Fluffy Tails</h2>
        navbar
      </header>
      <main>
        <h3>Here is some lovely Cat's that are in need of a home</h3>
        <CatList></CatList>
      </main>
      <footer>&copy; 2023 Fluffy tails</footer>
    </div>
  );
};

export default Home;
