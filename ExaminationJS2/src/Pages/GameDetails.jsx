import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchGameDetails } from "../API/rawg";
import "../Styling/GameDetails.css";

function GameDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGameDetails(id),
  });

  if (isLoading) return <p>Laddar...</p>;
  if (error) return <p>Något gick fel</p>;

  const stars = Math.floor(data.rating); // Kunna få fram raiting i stjärnor.

  return (
    <div className="game-details">
      <h1 className="game-title">{data.name}</h1>

      <div className="game-top">
        {data.background_image && (
          <img
            src={data.background_image}
            alt={data.name}
            className="game-image"
          />
        )}

        <div className="game-meta">
          <p className="style-released">Released: {data.released}</p>

          <p className="style-rating">
            Rating:
            <span className="stars">
              {"★".repeat(stars)}
              {"☆".repeat(5 - stars)}
            </span>
            <span className="rating-number">({data.rating})</span>
          </p>

          {data.genres && (
            <p className="game-genres">
              Genres: {data.genres.map((g) => g.name).join(", ")}
            </p>
          )}
        </div>
      </div>

      {data.description_raw && (
        <div className="description-box">
          <p className="game-description">{data.description_raw}</p>
        </div>
      )}
    </div>
  );
}

export default GameDetails;
