import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-zinc-900 w-full overflow-x-hidden">
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
