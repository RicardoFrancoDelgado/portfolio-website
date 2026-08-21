import { useEffect } from "react";
import { MotionConfig } from "motion/react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  useEffect(() => {
    console.log(
      "%c<ricardo/>%c\nCurioso(a) o suficiente para abrir o console — isso já diz algo bom sobre você.\nVamos conversar: ricardodelgado693@gmail.com  |  github.com/RicardoFrancoDelgado",
      "color:#f97316;font-weight:700;font-family:monospace;font-size:14px",
      "color:#a1a1aa;font-family:monospace;font-size:12px;line-height:1.6"
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Header />

      <main className="w-full">
        <About />
        <Projects />
        <Contact />
      </main>
    </MotionConfig>
  );
}