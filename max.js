const mobiles = [
  { name: "samsung", price: 20000, camera: "12mp" },
  { name: "realme", price: 17000, camera: "12mp" },
  { name: "Xaomi", price: 18000, camera: "12mp" },
  { name: "Oppo", price: 21000, camera: "12mp" },
  { name: "google", price: 32000, camera: "12mp" },
  { name: "Iphone", price: 50000, camera: "12mp" },
  { name: "Oneplus", price: 30000, camera: "12mp" },
];

function getMax(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (max.price > phone.price) {
      max = phone;
    }
  }
  return max;
}
const expensive = getMax(mobiles);
console.log(expensive);
