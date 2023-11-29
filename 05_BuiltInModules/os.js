const os = require('os');

// Devuelve información sobre el usuario actual del sistema
console.log('información sobre el usuario: ', os.userInfo());

// Devuelve el tiempo en segundos desde que el sistema está encendido
console.log('tiempo en segundos desde que el sistema está encendido: ', os.uptime());

// Devuelve la plataforma del sistema operativo
console.log('plataforma del sistema operativo: ', os.platform());

// Devuelve la versión del sistema operativo
console.log('versión del sistema operativo: ', os.release());

// Devuelve la cantidad total de memoria del sistema en bytes
console.log('cantidad total de memoria: ', os.totalmem());

// Devuelve la cantidad de memoria libre del sistema en bytes
console.log('cantidad de memoria libre: ', os.freemem());
