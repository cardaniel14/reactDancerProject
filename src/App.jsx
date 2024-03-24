import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Header />
      <Footer />
    </>
  );
};

export default App;
