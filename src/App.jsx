import Build from "./components/Build";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Qoute from "./components/Qoute";
import Review from "./components/Review";
import "./css/App.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Clients />
      <Projects />
      <Build />
      <Review />
      <Qoute />
      <Footer/>
    </>
  );
}

export default App;
