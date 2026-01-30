import "../Styling/GameCard3D.css";
import { Link } from "react-router-dom";


function GameCard({ game }) {
  const cover = game.background_image;

  // “character” finns inte i RAWG på samma sätt, så vi kör cover som fallback
  const character = game.background_image;

  return (
    <Link className="card-3d" to={`/game/${game.id}`}>
      <div className="wrapper">
        {cover && <img src={cover} className="cover-image" alt={game.name} />}
      </div>

      <div className="title">{game.name}</div>

      {character && <img src={character} className="character" alt="" />}
    </Link>
  );
}

export default GameCard;
