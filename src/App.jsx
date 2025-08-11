import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

// no need to add ( + space if starting <> at the same line as return
// capitalize first letter for elements in React
// Refactoring components 

function App() {
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />
  </>
  );
}

export default App

// or replace the above line with "export default function App() {" in line 12
