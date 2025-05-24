const fs = require("fs");

const path = "./citas.json"; //x non ripetere

// crea appuntamento
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevaCita = { nombre, edad, animal, color, enfermedad };

  const citas = JSON.parse(fs.readFileSync(path, "utf-8"));
  citas.push(nuevaCita);

  fs.writeFileSync(path, JSON.stringify(citas, null, 2)); //JSON.stringify(valore/funzione, nome/label, spazio)
  console.log("Cita registrada correctamente.");
};

// leggi appuntamento
const leer = () => {
  const citas = JSON.parse(fs.readFileSync(path, "utf-8"));
  console.log("Citas registradas:");

  citas.forEach((cita, index) => {
  const listaApp = `
  Cita ${index + 1}:
  Nombre: ${cita.nombre}
  Edad: ${cita.edad}
  Animal: ${cita.animal}
  Color: ${cita.color}
  Enfermedad: ${cita.enfermedad}
  ------------------------`;

    console.log(listaApp);
  });
};

module.exports = { registrar, leer }; //esporta x index


/* per non ripetere linee codice usare funzione

const write = (ruta, data) => fs.writeFileSync(ruta, JSON.stringify(data))

write('citas.json', arrayData)
write('operaciones.js', registrar)

*/