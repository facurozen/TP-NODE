
import fs from 'fs';
export function copiar(archivoEntrada, archivoSalida) {
  let contenido = fs.readFileSync(archivoEntrada, 'utf8');

  fs.writeFileSync(archivoSalida, contenido);
  
  console.log(`El archivo ${archivoEntrada} se ha copiado correctamente en ${archivoSalida}.`);
}

