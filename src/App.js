import React from "react";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Overview />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
