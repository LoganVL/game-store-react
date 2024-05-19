export function calcTotalPrice(items) {
  return items.reduce((acc, game) => (acc += game.price), 0);
}
