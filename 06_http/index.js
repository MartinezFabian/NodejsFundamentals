const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código de estado de respuesta (200: OK)
  res.setHeader('Content-Type', 'text/html'); // Establecer el tipo de contenido de la respuesta
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000/');
});
