let pricePhone = prompt("Введите стоимость смартфона")
pricePhone = Number (pricePhone);
console.log (typeof pricePhone)

if (!isNaN(pricePhone)) {
  if (pricePhone %2 == 0) {
  console.log('число чётное');
} else {
  console.log('число нечётное');
} 
}else {
  console.log('Упс, кажется, вы ошиблись');
}
