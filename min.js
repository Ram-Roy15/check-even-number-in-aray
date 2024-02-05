const mobiles = [
  { name: "samsung", price: 20000, camera: "12mp" },
  { name: "realme", price: 17000, camera: "12mp" },
  { name: "Xaomi", price: 18000, camera: "12mp" },
  { name: "Oppo", price: 21000, camera: "12mp" },
  { name: "google", price: 32000, camera: "12mp" },
  { name: "Iphone", price: 50000, camera: "12mp" },
  { name: "Oneplus", price: 30000, camera: "12mp" },
];

function getMin(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (min.price > phone.price) {
      min = phone;
    }
  }
  return min;
}

const cheap = getMin(mobiles);
console.log(cheap);
