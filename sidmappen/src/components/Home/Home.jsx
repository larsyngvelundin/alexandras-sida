import React from "react";
import "./Home.css";
import NavigationMenu from "../NavigationMenu";

const Home = () => {
  return (
    <div>
      <header>
        <div className="headContainer">
          <h2>Fluffy Tails</h2>
          <NavigationMenu />
        </div>
      </header>
      <main>
        <h3 className="mainTitle">
          Here is some lovely Cat's that are in need of a home
        </h3>
      </main>
      <footer>&copy; 2023 Fluffy tails</footer>
    </div>
  );
};

export default Home;
