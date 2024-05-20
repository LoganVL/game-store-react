import { useSelector } from "react-redux";
import "./game-page.css";
import { GameCover } from "../../components/game-cover";
import { GameGenre } from "../../components/game-genre";
import { GamePurchase } from "../../components/game-purchase";

export function GamePage() {
  const game = useSelector((state) => state.games.currentGame);
  if (!game) return null;
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            src={game.video}
            title="Youtube Video Player"
            frameborder="0"
            width="90%"
            height="400px"
          />
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки этого продукта:</p>
          {game.genres.slice(0, 3).map((elem, index) => (
            <GameGenre key={elem} genre={elem} />
          ))}
          <div className="game-page__buy-game">
            <GamePurchase game={game} />
          </div>
        </div>
      </div>
    </div>
  );
}
