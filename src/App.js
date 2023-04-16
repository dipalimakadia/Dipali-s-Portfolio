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
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Education />
      <Experience />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
