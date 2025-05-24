const { registrar, leer } = require('./operaciones'); //importa funzioni da operaciones.js

const argumentos = process.argv.slice(2); //process per input terminal
const [operacion, nombre, edad, animal, color, enfermedad] = argumentos;

/* slice(2) salta primi 2 valori non necessari qui

alternativa: const [ , , operacion, nombre, edad, animal, color, enfermedad ] = process.argv;

*/

if (operacion === 'registrar') {
  registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === 'leer') {
  leer();
}
