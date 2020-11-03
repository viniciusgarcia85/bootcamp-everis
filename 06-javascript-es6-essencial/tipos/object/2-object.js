const user = {
  name: 'Vinícius André',
  lastName: 'Garcia Soares'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Vinícius André Garcia Soares'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após alterações: ', newObj);

// Permite apenas a alteração de propriedades existentas em um objeto
const person = {
  name: 'Vinícius André'
};

Object.seal(person);
