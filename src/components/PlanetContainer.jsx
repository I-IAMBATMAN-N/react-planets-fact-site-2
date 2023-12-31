import sourceIcon from "../assets/icon-source.svg";
import { useState } from "react";

export default function PlanetContainer({ currPlanet }) {
  const [navState, setNavState] = useState("overview");
  // console.log("Planet.jsx", currPlanet);
  function handleState(state) {
    setNavState(state);
  }

  function setWidth(planet) {
    //
    const radius = planet.radius.slice(0, -2).replace(",", "");

    if (radius < 5000) {
      //
      return {
        width: "40%",
      };
    } else if (radius < 10000) {
      //
      return {
        width: "55%",
      };
    } else if (radius > 30000) {
      //
      return {
        width: "70%",
      };
    } else if (radius > 70000) {
      //
      return {
        width: "85%",
      };
    }
  }

  return (
    <div className="planet-container">
      <PlanetAside />
      <PlanetArticle currPlanet={currPlanet} />
    </div>
  );
  //
  function PlanetAside() {
    return (
      <aside className="img-container">
        <img
          src={
            navState === "structure"
              ? currPlanet.images.internal
              : currPlanet.images.planet
          }
          style={setWidth(currPlanet)}
        />
        <img
          src={navState === "geology" ? currPlanet.images.geology : ""}
          alt=""
          style={{ display: `${navState === "geology" ? "block" : "none"}` }}
        />
      </aside>
    );
  }
  function PlanetArticle({ currPlanet }) {
    return (
      <article className="planet-info">
        <div className="planet-info--container">
          <header className="planet-info--heading">
            <h1 className="heading-primary">{currPlanet.name}</h1>
          </header>
          <section className="planet-info--section">
            {/* ---------------------------- COMPONENTS ---------------------------- */}
            <PlanetInfoText />
            <PlanetInfoLink />
            <Nav />
            {/* ---------------------------- COMPONENTS ---------------------------- */}
          </section>
        </div>
      </article>
    );

    function PlanetInfoText() {
      return (
        <p className="planet-info--text">
          {navState === "overview" ? currPlanet.overview.content : <></>}
          {navState === "structure" ? currPlanet.structure.content : <></>}
          {navState === "geology" ? currPlanet.geology.content : <></>}
        </p>
      );
    }
    function PlanetInfoLink() {
      function getSource() {
        let source;

        if (navState === "overview") source = currPlanet.overview.source;
        if (navState === "structure") source = currPlanet.structure.source;
        if (navState === "geology") source = currPlanet.geology.source;

        return source;
      }
      return (
        <p className="planet-info--link">
          <span>Source</span>:
          <a href={getSource()} target="_blank" rel="noreferrer">
            Wikipedia
            <img src={sourceIcon} alt="source icon" className="icon-source" />
          </a>
        </p>
      );
    }
    function Nav() {
      return (
        <nav className="secondary-nav">
          <ul className="secondary-nav--list">
            <NavItems />
          </ul>
        </nav>
      );
      //
      function NavItems() {
        const navData = [
          { a: "", b: "Overview" },
          { a: "Internal", b: "Structure" },
          { a: "Surface", b: "Geology" },
        ];

        return navData.map((data, index) => (
          <li
            key={Math.random()}
            className={`secondary-nav--item ${currPlanet.name.toLowerCase()} ${
              navState === `${data.b.toLowerCase()}` ? "active" : ""
            }`}
            onClick={() => handleState(data.b.toLowerCase())}
          >
            <a href="#" className="secondary-nav--link">
              <h3 className="heading-tertiary">
                <span>0{index + 1}</span>
                <span>{data.a && ""}</span> {data.b}
              </h3>
            </a>
          </li>
        ));
      }
    }
  }
}
