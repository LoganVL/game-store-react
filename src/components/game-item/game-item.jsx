import "./game-item.css";
import { GameCover } from "../game-cover";

export function GameItem({ game }) {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genres">
          {game.genres.map((genre) => " " + genre)}
        </div>
        <div className="game-item__buy">buy</div>
      </div>
    </div>
  );
}
