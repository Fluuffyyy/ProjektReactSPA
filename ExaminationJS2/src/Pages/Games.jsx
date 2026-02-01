import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGames } from "../Hooks/useGames";
import GameCard from "../Components/GameCard";
import "../Styling/Games.css";

function Games() {
  const [searchText, setSearchText] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const setPage = (nextPage) => {
    const safePage = Math.max(1, nextPage);
    setSearchParams({ page: String(safePage) });
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setPage(1);
  };

  const {
    data: gamesResponse,
    isLoading,
    isError,
    error,
    isFetching,
  } = useGames(currentPage, searchText);

  const games = gamesResponse?.results ?? [];

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
            value={searchText}
            onChange={handleSearchChange}
          />

          <div className="pagination">
            <button
              onClick={() => setPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Föregående
            </button>

            <span>
              Sida {currentPage} {isFetching && "(uppdaterar...)"}
            </span>

            <button
              onClick={() => setPage(currentPage + 1)}
              disabled={!gamesResponse?.next}
            >
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
