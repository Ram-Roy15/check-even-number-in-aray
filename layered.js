function layeredCard(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const third100Price = 80;
  const abpve300Price = 70;

  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const first100Total = first100Price * 100;
    const remainingQuantity = quantity - 100;
    const second100Total = remainingQuantity * 90;
    const total = first100Total + second100Total;
    return total;
  } else if (quantity <= 300) {
    const first100Total = 100 * first100Price;
    const second100Total = 90 * second100Price;
    const remainingQuantity = quantity - 200;
    const third100Total = remainingQuantity * third100Price;
    const total = first100Total + second100Total + third100Total;
    return total;
  } else if (quantity > 300) {
    const first100Total = first100Price * 100;
    const second100Total = second100Price * 100;
    const third100Total = third100Price * 100;
    const remainingQuantity = quantity - 300;
    const four100Total = remainingQuantity * abpve300Price;
    const total = first100Total + second100Total + third100Total + four100Total;
    return total;
  }
}
const discountPrice = layeredCard(800);
console.log(discountPrice);
