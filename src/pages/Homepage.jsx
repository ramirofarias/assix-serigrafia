import HeroButton from "../components/HeroButton";
import React from "react";

const Homepage = () => {
  return (
    <div className="wrapper">
      <div className="hero">
        <div className="hero--text">
          <h1>TALLER DE SERIGRAFÍA</h1>
          <p>Aprende estampado textil con videotutoriales en español.</p>
          <p>Resuelve todas tus dudas en nuestra comunidad.</p>
        </div>
      </div>
      <HeroButton />
    </div>
  );
};

export default Homepage;
