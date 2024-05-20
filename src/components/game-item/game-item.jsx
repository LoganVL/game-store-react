import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../redux/games/reducer";
import { GameCover } from "../game-cover";
import { GamePurchase } from "../game-purchase";
import { GameGenre } from "../game-genre";
import "./game-item.css";

export function GameItem({ game }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.url}`);
  };
  return (
    <div className="game-item" onClick={handleClick}>
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
