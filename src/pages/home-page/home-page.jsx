import "./home-page.css";
import { GAMES } from "./game-data";
import { GameItem } from "../../components/game-item";

export function HomePage() {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
}
