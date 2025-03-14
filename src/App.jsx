import NavBar from "./components/navbar";
import "./style/index.scss";
import Mig from "./components/mig";
import Projekter from "./components/projekter";
import Kompetencer from "./components/kompetencer.jsx";
import Kontakt from "./components/kontakt.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <h1>Portfolio</h1>
      <Mig />
      <Projekter />
      <Kompetencer />
      <Kontakt />
      <Footer />
    </>
  );
}

export default App;
