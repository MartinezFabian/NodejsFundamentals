const EventEmitter = require('events');

// Crear una instancia del EventEmitter
const myEmitter = new EventEmitter();

// Definir un evento y su manejador
myEmitter.on('saludar', (nombre) => {
  console.log(`¡Hola ${nombre} desde el evento!`);
});

// Emitir el evento
myEmitter.emit('saludar', 'Juan');
