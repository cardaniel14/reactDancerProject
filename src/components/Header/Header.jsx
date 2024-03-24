import paolaPhoto from "../../assets/paolaHeader.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <img src={paolaPhoto} alt="paolaHeader" className="PaolaHeader" />
    </div>
  );
};

export default Header;
