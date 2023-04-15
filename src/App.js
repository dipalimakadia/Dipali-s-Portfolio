import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="h-full col-span-12">
        <header className="sticky absolute top-0 left-0 right-0 col-span-12 z-30">
          <NavBar />
        </header>

        <Home />
        <SocialLinks />
        <About />
        <Education />
        <Experience />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
