const users = ['Vinícius', 'Pedro', 'Bruna']

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Vinícius',
    age: 35,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 20,
    gender: gender.MAN
  },
  {
    name: 'Bruna',
    age: 27,
    gender: gender.WOMAN
  }
]

// Retornar a quantidade de itens de um array
console.log('Itens: ', persons.length);

// Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo 
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao JavaScript';
  return person;
});

console.log('\nPessoas com a adição do course: ', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce(() => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas ', totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                          age += person.age;
                          return age;
                        }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);


