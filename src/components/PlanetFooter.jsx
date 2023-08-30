export default function PlanetFooter({ currPlanet }) {
  return (
    <footer className="planet-footer">
      <ul className="planet-parameters">
        <FooterItems currPlanet={currPlanet} />
      </ul>
    </footer>
  );
  function FooterItems({ currPlanet }) {
    const headings = [
      "Rotation Time",
      "Revolution Time",
      "Radius",
      "Average Temp.",
    ];
    const { rotation, revolution, radius, temperature } = currPlanet;
    const values = [rotation, revolution, radius, temperature];
    return values.map((data, index) => (
      <li key={Math.random()} className="planet-parameters--parameter">
        <h4 className="heading-quaternary">{headings[index]}</h4>
        <h2 className="heading-secondary">{data}</h2>
      </li>
    ));
  }
}
