export default function PlanetFooter({ currPlanet }) {
  return (
    <footer class="planet-footer">
      <ul class="planet-parameters">
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
      <li key={Math.random()} class="planet-parameters--parameter">
        <h4 class="heading-quaternary">{headings[index]}</h4>
        <h2 class="heading-secondary">{data}</h2>
      </li>
    ));
  }
}
