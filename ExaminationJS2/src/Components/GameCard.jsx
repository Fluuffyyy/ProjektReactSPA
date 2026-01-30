import "../Styling/GameCard3D.css";

function GameCard({ game }) {
  const cover = game.background_image;

  // “character” finns inte i RAWG på samma sätt, så vi kör cover som fallback
  const character = game.background_image;

  return (
    <a className="card-3d" href={game.website || "#"} target="_blank" rel="noreferrer">
      <div className="wrapper">
        {cover && <img src={cover} className="cover-image" alt={game.name} />}
      </div>

      <div className="title">{game.name}</div>

      {character && <img src={character} className="character" alt="" />}
    </a>
  );
}

export default GameCard;
