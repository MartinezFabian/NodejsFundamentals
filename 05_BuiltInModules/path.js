const path = require('path');

// join: une directorios y archivos en una ruta absoluta
const filePath = path.join('public', 'dist', 'styles', 'main.css');

console.log(filePath); // Salida: public/dist/styles/main.css

// basename: devuelve el nombre base de un archivo
const baseName = path.basename(filePath);

console.log(baseName); // Salida: main.css

// dirname: devuelve la ruta del directorio padre
const dirName = path.dirname(filePath);

console.log(dirName); // Salida: public/dist/styles

// parse: devuelve un objeto con la información de la ruta
const objParse = path.parse(filePath);

console.log(objParse); // Salida: { root: '', dir: 'public/dist/styles', base: 'main.css', ext: '.css', name: 'main' }

// extname: devuelve la extensión de un archivo
const extName = path.extname(filePath);

console.log(extName); // Salida: .css

// resolve: devuelve la ruta absoluta de un directorio
const resolve = path.resolve('styles');

console.log(resolve); // Salida: /home/fabian/ProyectosNode/NodejsFundamentals/05_BuiltInModules/styles
