import "../Styling/Pages.css";
import ApiDemo from "../Components/ApiDemo";

function About() {
  return (
    <main className="page">
      <section className="page-card">
        <h1>About</h1>
        <br />
        <p>
          The Gaming Hub är en React-baserad Single Page Application där du kan
          utforska spel med hjälp av RAWG API.
        </p>
      </section>

      <section className="page-card api-card">
        <p className="api-note">
          Denna komponent är ett exempel på användning av useEffect
          och fetch för att uppfylla grundkravet för API-hantering. 
          
          <strong className="highlight">I resten av applikationen används TanStack Query för 
          datahämtning eftersom det ger bättre struktur, cache och hantering av 
          loading- och error-states.</strong>
        </p>
        <ApiDemo />
      </section>
    </main>
  );
}

export default About;