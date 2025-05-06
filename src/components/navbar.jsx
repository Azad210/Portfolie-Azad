import "../style/navbar.scss";
import logo from "../img/azad.svg";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <a href="/">
          <img className="nav-logo" src={logo} alt="Logo" />
          </a>
          <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={isOpen ? "active" : ""}>
            <li>
              <a href="#projekter" onClick={handleLinkClick}>
                Mine projekter |
              </a>
            </li>
            <li>
              <a href="#kompetencer" onClick={handleLinkClick}>
                Kompetencer |
              </a>
            </li>
            <li>
              <a href="#kontakt" onClick={handleLinkClick}>
                Kontakt |
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
