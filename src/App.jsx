import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Header />

      <main className="w-full">
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
