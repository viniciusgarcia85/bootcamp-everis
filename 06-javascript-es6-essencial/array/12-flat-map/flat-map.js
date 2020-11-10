// flatMap() - retorna um novo array assim como a função map
// e executa um flat de profundidade 1
const arr = [1, 2, 3, 4];

console.log(arr.flatMap(value => [value * 2]));

console.log(arr.flatMap(value => [[value * 2]]));


