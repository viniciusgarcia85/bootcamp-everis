// splice() - altera um array adicionando novos elementos enquanto remove elementos antigos
const arr = [1, 2, 3, 4, 5];

// remove a partir da posição 2
arr.splice(2);
console.log(arr);

// add o item "first" na 1° posição
arr.splice(0, 0, 'first');

console.log(arr);

