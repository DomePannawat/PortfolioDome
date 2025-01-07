import React, { useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Certificate from "./components/Certificate";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Certificate />
        <Contact />
      </main>
    </div>
  );
}

export default App;
