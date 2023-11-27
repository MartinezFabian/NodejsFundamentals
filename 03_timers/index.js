// repetir con el intervalo de 1 segundo
let timerId = setInterval(() => {
  console.log('tick');
}, 1000);

// después de 8 segundos parar
setTimeout(() => {
  clearInterval(timerId);
  console.log('stop');
}, 8000);
