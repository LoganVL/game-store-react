import "./game-cover.css";

export function GameCover({ image = "" }) {
  return (
    <div
      className="game-cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}
