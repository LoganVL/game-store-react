import "./game-item.css";
import { GameCover } from "../game-cover";
import { GamePurchase } from "../game-purchase";
import { GameGenre } from "../game-genre";

export function GameItem({ game }) {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genres">
          {game.genres.slice(0, 3).map((genre, index) => (
            <GameGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="game-item__buy">
          <GamePurchase game={game} />
        </div>
      </div>
    </div>
  );
}
