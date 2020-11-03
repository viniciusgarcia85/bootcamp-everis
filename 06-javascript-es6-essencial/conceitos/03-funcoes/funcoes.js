function getName () {
  return 'Vinícius André Garcia Soares';
}

function logFn (fn) {
  console.log(fn())
}

const logFnResult = logFn;

logFnResult(getName);
