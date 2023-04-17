import React from "react";
import "./Home.css";
import NavigationMenu from "../NavigationMenu";

const Home = () => {
  return (
    <div>
      <header>
        <h2>Fluffy Tails</h2>
        <NavigationMenu />
      </header>
      <main>
        <h3>Here is some lovely Cat's that are in need of a home</h3>
      </main>
      <footer>&copy; 2023 Fluffy tails</footer>
    </div>
  );
};

export default Home;
