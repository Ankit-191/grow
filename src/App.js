import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Joinwork from "./components/Joinwork";
import Footer from "./components/Footer";
import Frequently from "./components/Frequently";
function App() {
  return (
    <>
      <Hero />
      <Welcome />
      <Joinwork />
      <Frequently />
      <Footer />
    </>
  );
}

export default App;
