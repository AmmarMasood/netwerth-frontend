import React from "react";
import "./about.css";
import BigWhiteSquare from "../../../assets/images/big-white-square.svg";

function About() {
  return (
    <div className="ha-container">
      <img src={BigWhiteSquare} alt="about" />
      <div className="ha-text-container">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, et atomorum sensibus usu, sea sumo purto
          ea, vim vidit accusam oporteat ad. Ad sea adhuc democritum, ea brute
          accusamus quo. Quo magna audire perpetua ex, ex eum error putent
          molestiae. Legimus dolores no pro, mel vivendum imperdiet repudiare
          eu. Eu qui purto zril definiebas, aeterno quaestio partiendo has ex.
          <br />
          <br />
          Lorem ipsum dolor sit amet, et atomorum sensibus usu, sea sumo purto
          ea, vim vidit accusam oporteat ad. Ad sea adhuc democritum, ea brute
          accusamus quo. Quo magna audire perpetua ex, ex eum error putent
          molestiae. Legimus dolores no pro, mel vivendum imperdiet repudiare
          eu. Eu qui purto zril definiebas, aeterno quaestio partiendo has ex.
        </p>
      </div>
    </div>
  );
}

export default About;
