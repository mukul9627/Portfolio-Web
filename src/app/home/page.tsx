import React from "react";
import Card from "@/component/Card/card";

const home = () => {
  return (
    <>
      <div>
        <Card
          name="Mukul Sharma"
          description="Frontend Developer with 3+ years of hands-on experience crafting fast, scalable, and user-focused web applications. Passionate about building clean UI experiences using React.js, Next.js, modern JavaScript, and seamless API integrations."
          buttonLink="/about"
        />
      </div>
    </>
  );
};

export default home;
