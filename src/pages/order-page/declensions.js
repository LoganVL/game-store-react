export function declensions(items) {
  let count = items.length;

  switch (count) {
    case 1:
      return `${count} товар`;
    case 2:
    case 3:
    case 4:
      return `${count} товара`;
    default:
      return `${count} товаров`;
  }
}
