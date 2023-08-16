import React from "react";
import Button from "@mui/material/Button";
import "./HeroSection.css"; // Make sure to import the CSS file for HeroSection
 // Import the custom styles

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Library</h1>
        <p>Discover a world of books waiting for you.</p>
        <Button variant="contained" className="library-button" size="large">
          Library
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
