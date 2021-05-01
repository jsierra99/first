import "./app.scss";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import History from "./components/History.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <History />
      <Contact />
    </>
  );
}

export default App;
