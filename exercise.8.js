let myMap = new Map ();
myMap.set('name', 'Vika');
myMap.set('age', 27);
myMap.set('phone', '+79222120859');
for (const [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}