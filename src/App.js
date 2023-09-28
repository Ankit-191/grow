import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Joinwork from "./components/Joinwork";
import Footer from "./components/Footer";
import Frequently from "./components/Frequently";
import { ViewData } from "./components/common/Helper";
import View from "./components/View";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Hero />
      <Welcome />
      <Joinwork />
      <View view={ViewData} />
      <Form />
      <Frequently />
      <Footer />
    </>
  );
}

export default App;
