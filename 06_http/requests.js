const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.write(`
    <html>
    <body>
      <h1>Welcome to the server</h1>
    </body>
    </html>`);
    return res.end();
  }

  if (req.url === '/about') {
    res.write(`
    <html>
    <body>
      <h1>About us</h1>
      <a href="/">Go Home</a>
    </body>
    </html>`);
    return res.end();
  }

  res.write(`
  <html>
  <body>
    <h1>404: Not Found</h1>
    <a href="/">Go Home</a>
  </body>
  </html>`);
  return res.end();
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000/');
});
