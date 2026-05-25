import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
  // 🌙 Theme state
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <Header
        name="Hi, I'm Lima Rahimzai"
        role="Frontend Web Developer"
        description="I build clean, modern and responsive web applications using React."
      />

      <About />

      <Skills />

      <Projects />

      <Certificates />

      <Contact />

      <Feedback />

      <Footer />
    </>
  );
}

export default App;