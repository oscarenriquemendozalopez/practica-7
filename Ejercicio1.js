const readline = require('readline');

const aed = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

aed.question('Ingrese la cantidad de departamentos: ', (cdd) => {
  let cantidadDepartamentos = parseInt(cdd);

  if (isNaN(cantidadDepartamentos) || cantidadDepartamentos <= 0) {
    console.log('Debe ingresar un número mayor a cero.');
    aed.close();
    
  } else {
    aed.question('Ingrese la cantidad de empleados por departamento: ', (epd) => {
      let empleadosPorDepartamento = parseInt(epd);

      if (isNaN(empleadosPorDepartamento) || empleadosPorDepartamento <= 0) {
        console.log('Debe ingresar un número mayor a cero.');
        aed.close();
      } else {
        console.log('\n== Registro de horarios de empleados por departamento ==');

        for (let departamento = 1; departamento <= cantidadDepartamentos; departamento++) {
          console.log(`\nDepartamento ${departamento}:`);

          if (departamento % 2 !== 0) {
            console.log('Turno: Mañana');
          } else {
            console.log('Turno: Tarde');
          }

          for (let empleado = 1; empleado <= empleadosPorDepartamento; empleado++) {
            console.log(`Empleado ${empleado}`);
          }
        }

        aed.close();
      }
    });
  }
});