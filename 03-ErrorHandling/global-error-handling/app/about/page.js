"use client"

import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["Mango", 'Apple'])
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>
      <button
      //these error will block the rendering
        onClick={() => {
          setFruits(null)
        }}
      >Clickk me</button>

      {
        fruits.map((fruit)=> <p key={fruit}> {fruit}</p>)
      }
    </div>
  );
};

export default About;
