const fs = require('fs');

const filePath = './test.txt';

// readFile: lee un archivo y lo devuelve como una cadena de caracteres UTF-8
const data = fs.readFileSync(filePath, 'utf8');
console.log(data); // Salida: Texto del archivo de prueba

// Si no indicamos el 'utf8', el archivo es devuelto como un objeto Buffer
const dataBuffer = fs.readFileSync(filePath);
console.log(dataBuffer); // Salida: <Buffer 54 65 78 74 6f 20 64 65 6c 20 61 72 63 68 69 76 6f 20 64 65 20 70 72 75 65 62 61>

// otra forma de leer el archivo es utilizar el .toString() para convertirlo a una cadena
const dataString = fs.readFileSync(filePath).toString();
console.log(dataString); // Salida: Texto del archivo de prueba

// writeFileSync: escribe un archivo sobre el disco con el contenido indicado como argumento
fs.writeFileSync('./newFile.txt', 'Hola, mundo desde Node!');

// leer el archivo creado anteriormente
const dataOfNewFile = fs.readFileSync('./newFile.txt').toString();
console.log(dataOfNewFile); // Salida: Hola, mundo desde Node!

// pasando como segundo argumento el objeto { flag: 'a' } indica que el contenido se agregara al final del archivo
fs.writeFileSync('./newFile.txt', ' Se esta agregando texto al archivo', { flag: 'a' });
const dataOfNewFileUpdated = fs.readFileSync('./newFile.txt').toString();
console.log(dataOfNewFileUpdated); // Salida: Hola, mundo desde Node! Se esta agregando texto al archivo

// Async readFile: leer un archivo de forma asíncrona
fs.readFile('./newFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data); // Salida: Hola, mundo desde Node! Se esta agregando texto al archivo
});

// si se intenta leer un archivo que no existe devuelve un error de tipo ENOENT (No such file or directory)
fs.readFile('./unknownFile.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString()); // Salida: [Error: ENOENT: no such file or directory, open './unknownFile.txt'] { ... }
});
