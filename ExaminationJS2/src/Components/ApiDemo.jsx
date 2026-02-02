import { useEffect, useState } from "react";
import { RAWG_API_KEY, RAWG_BASE_URL } from "../API/rawgConfig";

function ApiRequirementDemo() {
  const [status, setStatus] = useState("Kontrollerar API...");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function testFetch() {
      try {
        const res = await fetch(`${RAWG_BASE_URL}/games?key=${RAWG_API_KEY}&page_size=1`);
        if (!res.ok) throw new Error("Kunde inte hämta data, Försök igen!");
        setStatus("API OK! 😊");
      } catch (e) {
        setError(e.message);
      }
    }

    testFetch();
  }, []);

  if (error) return <p>{error}</p>;
  return <p>{status}</p>;
}

export default ApiRequirementDemo;
