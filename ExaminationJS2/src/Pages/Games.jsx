import { useState } from "react";
import { useGames } from "../Hooks/useGames";
import GameCard from "../Components/GameCard";
import "../Styling/Games.css";

function Games() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, isFetching } =
    useGames(page, search);

  const games = data?.results ?? [];

  return (
    <main className="container">
      <h2>Välkommen till <br />The Gaming Hub</h2>
      <p>Där vi har ALLA spel du kan tänka dig </p>

     <div className="games-controls">
  <input
    type="text"
    placeholder="Sök efter spel..."
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setPage(1);
    }}
  />

  <div className="pagination">
    <button
      onClick={() => setPage((p) => Math.max(1, p - 1))}
      disabled={page === 1}
    >
      ← Föregående
    </button>

    <span>
      Sida {page} {isFetching && "(uppdaterar...)"}
    </span>

    <button
      onClick={() => setPage((p) => p + 1)}
      disabled={!data?.next}
    >
      Nästa →
    </button>
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
