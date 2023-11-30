function f1() {
  console.log('f1');
}

function f2() {
  console.log('f2');
}

function main() {
  console.log('main');

  setTimeout(f1, 0);

  f2();
}

main(); // Salida: main f2 f1

/*
La función main() entra en el call stack.
Tiene una función console log para imprimir la palabra main. Se ejecuta el console.log('main') y sale del stack.
Se lleva a cabo la API del navegador setTimeout.
La función callback entra en el callback queue.
La ejecución se produce de manera normal en el stack, así que f2() pasa al stack. Se ejecuta el console log de la función f2()y ambos salen del stack.
La función main() también sale del stack.
El event loop identifica que el call stack está vacío y que hay una función callback en la cola.
La función callback f1() pasa al stack. Comienza la ejecución. El console log se ejecuta y f1() también sale del stack.
En este punto, no hay nada más que ejecutar ni en el stack ni en la cola.
*/
