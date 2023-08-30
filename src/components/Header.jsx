import { useState } from "react";
export default function Header({ planetData, currPlanet, setCurrPlanet }) {
  const [activeNav, setActiveNav] = useState("");
  function handleActiveNav() {
    if (activeNav.length > 0) {
      setActiveNav("");
    } else {
      setActiveNav("active");
    }
  }

  function handleNavItem(planet) {
    setCurrPlanet(planet);
    setActiveNav("");
  }

  return (
    <header className="main-header">
      <div className="container">
        {/* ---------------------------- COMPONENTS ---------------------------- */}
        <Logo />
        <Nav />
        <NavButton />
        {/* ---------------------------- XXXXXXXXXX ---------------------------- */}
      </div>
    </header>
  );
  function Logo() {
    return (
      <a href="#" className="logo">
        <span className="logo-text">The Planets</span>
      </a>
    );
  }
  function Nav() {
    return (
      <nav className={`main-nav ${activeNav}`}>
        <ul className="main-nav--list">
          <NavItems />
        </ul>
      </nav>
    );
    function NavItems() {
      return planetData.map((data) => (
        <li key={Math.random()} className="main-nav--item">
          <button
            className="main-nav--link"
            onClick={() => handleNavItem(data)}
          >
            <h4 className="heading-quaternary">{data.name}</h4>
          </button>
        </li>
      ));
    }
  }
  function NavButton() {
    <button className="main-nav--btn" onClick={handleActiveNav}>
      <svg
        className="main-nav--btn"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="17"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </button>;
  }
}
