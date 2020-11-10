// entries() - retorna um Array Iterator que contém os pares chave/valor para
// cada elemento do array
const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());