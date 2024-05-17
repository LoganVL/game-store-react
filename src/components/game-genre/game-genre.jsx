import { ButtonToBuy } from "../button";

export function GameGenre({ genre }) {
  return <ButtonToBuy children={genre} type="primary" size="xs" />;
}
