function Pessoa () {
  return {
    name: 'Vinícius André',
    lastName: 'Garcia Soares'
  }
}
const p = Pessoa();
console.log(p)

// Passando atributos
function Pessoa (name) {
  return {
    name,
    lastName: 'Garcia Soares'
  }
}
const p = Pessoa('Custom name');
console.log(p)

