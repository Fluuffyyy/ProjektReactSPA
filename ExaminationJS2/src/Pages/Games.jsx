import { useState } from "react";
import { useGames } from "../Hooks/useGames";
import { useSearchParams } from "react-router-dom";
import GameCard from "../Components/GameCard";
import "../Styling/Games.css";

function Games() {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError, error, isFetching } = useGames(
    page,
    search,
  );

  const games = data?.results ?? [];

  const goToPage = (newPage) => {
    setSearchParams({ page: String(Math.max(1, newPage)) });
  };

  return (
    <main className="container">
      <div className="hero">
        <h2>
          Välkommen till <br />
          The Gaming Hub
        </h2>
        <p>Där vi har ALLA spel du kan tänka dig </p>

        <div className="games-controls">
          <input
            type="text"
            placeholder="Sök efter spel..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              goToPage(1); // när man söker börjar vi alltid från sida 1
            }}
          />

          <div className="pagination">
            <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
              ← Föregående
            </button>

            <span>
              Sida {page} {isFetching && "(uppdaterar...)"}
            </span>

            <button onClick={() => goToPage(page + 1)} disabled={!data?.next}>
              Nästa →
            </button>
          </div>
        </div>
      </div>

      {isLoading && <p>Laddar spel...</p>}
      {isError && <p>{error.message}</p>}

      {!isLoading && !isError && (
        <ul className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Games;
