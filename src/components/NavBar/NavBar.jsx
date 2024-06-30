import "./NavBar.css";
import logo from "../../assets/pixlr-image-generator-0a139eeb-e319-4142-a1bc-ecaed27548b9.png";
import "@fortawesome/fontawesome-free/css/all.css";

const NavBar = ({ onScroll, sections }) => {
  const toggleDropdown = () => {
    const dropDown = document.querySelector(".menu");
    const navBar = document.querySelector(".navBar");
    dropDown.classList.toggle("show");
    navBar.classList.toggle("height");
  };

  const toggleActiveHandler = (id) => {
    const activeItem = document.getElementById(id);
    const oldActive = document.querySelector(".active");
    if (oldActive) oldActive.classList.remove("active");
    activeItem.classList.add("active");
    onScroll(sections[Number(id)]);
  };

  return (
    <div className="navBar">
      <span>
        <img src={logo} alt="logo" />
        <div className="menu-toggle" onClick={toggleDropdown}>
          <i className="fa fa-bars"></i>
        </div>
      </span>
      <ul className="menu">
        <li id="0" onClick={() => toggleActiveHandler("0")}>
          Home
        </li>
        <li id="1" onClick={() => toggleActiveHandler("1")}>
          Services
        </li>
        <li id="2" onClick={() => toggleActiveHandler("2")}>
          About us
        </li>
        <li id="3" onClick={() => toggleActiveHandler("3")}>
          Contact us
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
