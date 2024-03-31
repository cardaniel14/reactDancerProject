import "./Header.css";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import photoPaola from "../../assets/paolaHeader.jpg";
const Header = () => {
  return (
    <div>
      <div className="encabezado">
        <header>
          <Router>
            <Navbar />
          </Router>
        </header>
        <img src={photoPaola} alt="Paola Vasconcelos" className="zona1" />
      </div>
      <p
        className="title"
        style={({ color: "white" }, { border: "solid 2px blue" })}
      >
        Dançando e convidado a dançar desde 2009, trazendo a dança de salão como
        caminho de transformação de si e do mundo.
      </p>
      {/*
      <div className="main">
        <p className="title">
          Dançando e convidado a dançar desde 2009, trazendo a dança de salão
          como caminho de transformação de si e do mundo.
        </p>
      </div> */}
    </div>
  );
};

export default Header;
