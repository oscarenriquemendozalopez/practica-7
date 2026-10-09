const readline = require('readline');

const clip = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

clip.question('Ingrese el número de lotes a revisar: ', (ndlr) => {
  let cantidadLotes = parseInt(ndlr);

  if (isNaN(cantidadLotes) || cantidadLotes <= 0) {
    console.log('Debe ingresar un número mayor a cero.');
    clip.close();
  } else {
    clip.question('Ingrese el número de cajas por lote: ', (ncl) => {
      let cajasPorLote = parseInt(ncl);

      if (isNaN(cajasPorLote) || cajasPorLote <= 0) {
        console.log('Debe ingresar un número mayor a cero.');
        clip.close();
      } else {
        console.log('\n== Control de inventario y lotes de producción ==');

        for (let lote = 1; lote <= cantidadLotes; lote++) {
          console.log(`\nLote ${lote}:`);

          for (let caja = 1; caja <= cajasPorLote; caja++) {
            let codigo = lote * caja * 2;

            if (codigo % 4 === 0) {
              console.log(`Caja ${caja} - Código: ${codigo} - Revisión Prioritaria`);
            } else {
              console.log(`Caja ${caja} - Código: ${codigo} - Aprobado`);
            }
          }
        }

        clip.close();
      }
    });
  }
});