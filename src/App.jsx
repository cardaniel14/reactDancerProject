import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
};

export default App;
