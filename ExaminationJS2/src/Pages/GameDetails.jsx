import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchGameDetails } from "../API/rawg";
import "../Styling/GameDetails.css";

function GameDetails() {
  const { id } = useParams();

  const {
    data: game,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGameDetails(id),
    enabled: Boolean(id),
  });

  if (isLoading) return <p>Laddar...</p>;
  if (isError) return <p>{error.message || "Något gick fel"}</p>;
  if (!game) return <p>Spelet hittades inte.</p>;

  const rating = game.rating ?? 0;
  const stars = Math.max(0, Math.min(5, Math.floor(rating)));

  return (
    <div className="game-details">
      <h1 className="game-title">{game.name}</h1>

      <div className="game-top">
        {game.background_image && (
          <img
            src={game.background_image}
            alt={game.name}
            className="game-image"
          />
        )}

        <div className="game-meta">
          <p className="style-released">Released: {game.released}</p>

          <p className="style-rating">
            Rating:
            <span className="stars">
              {"★".repeat(stars)}
              {"☆".repeat(5 - stars)}
            </span>
            <span className="rating-number">({rating})</span>
          </p>

          {game.genres?.length > 0 && (
            <p className="game-genres">
              Genres: {game.genres.map((g) => g.name).join(", ")}
            </p>
          )}
        </div>
      </div>

      {game.description_raw && (
        <div className="description-box">
          <p className="game-description">{game.description_raw}</p>
        </div>
      )}
    </div>
  );
}

export default GameDetails;
