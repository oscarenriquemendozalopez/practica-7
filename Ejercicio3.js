const readline = require('readline');

const csc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

csc.question('Ingrese la cantidad de líneas de ensamblaje: ', (cle) => {
  let cantidadLineas = parseInt(cle);

  if (isNaN(cantidadLineas) || cantidadLineas <= 0) {
    console.log('Debe ingresar un número entero mayor a cero.');
    csc.close();
  } else {
    csc.question('Ingrese la cantidad de sensores por línea: ', (csl) => {
      let cantidadSensores = parseInt(csl);

      if (isNaN(cantidadSensores) || cantidadSensores <= 0) {
        console.log('Debe ingresar un número entero mayor a cero.');
        csc.close();
      } else {
        console.log('\n== Evaluación de los sensores por línea de ensamblaje ==');

        for (let linea = 1; linea <= cantidadLineas; linea++) {
          console.log(`\nLínea ${linea}:`);

          for (let sensor = 1; sensor <= cantidadSensores; sensor++) {
            let rendimiento = linea * sensor * 5;

            if (rendimiento >= 50) {
              console.log(`Sensor ${sensor} - Rendimiento: ${rendimiento} - Estado: Óptimo`);
            } else if (rendimiento >= 25) {
              console.log(`Sensor ${sensor} - Rendimiento: ${rendimiento} - Estado: Mantenimiento Preventivo`);
            } else {
              console.log(`Sensor ${sensor} - Rendimiento: ${rendimiento} - Estado: Falla de Lectura`);
            }
          }
        }

        csc.close();
      }
    });
  }
});