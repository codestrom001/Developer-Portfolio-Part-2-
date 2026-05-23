import { useEffect } from "react";

import "./styles/style.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

import profileImage from "./assets/profile.png";

function App() {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const trail = document.querySelector(".cursor-trail");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      setTimeout(() => {
        trail.style.left = e.clientX + "px";
        trail.style.top = e.clientY + "px";
      }, 80);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <>
      {/* CUSTOM CURSOR */}
      <div className="cursor"></div>
      <div className="cursor-trail"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Header
        message="Welcome to my developer portfolio!"
        image={profileImage}
      />

      {/* ABOUT */}
      <About />

      {/* PROJECTS */}
      <Projects />

      {/* CERTIFICATES */}
      <Certificates />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;