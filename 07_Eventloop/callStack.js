function f1() {
  console.log('f1');
}
function f2() {
  f1();
  console.log('f2');
}
function f3() {
  f2();

  console.log('f3');
}

f3(); // Salida: f1, f2, f3

/**
 *  Aquí la función f3() invoca a la función f2() que a su vez invoca también a la función f1().
 *  f3() va a la pila en primer lugar invocando a la función f2().
 *  f2() también se añade a la pila mientras f3() aún está en ella.
 *  La función f2() invoca a f1(), la cual se añade a la pila junto con f2() y f3().
 *  En primer lugar,f1() termina de ejecutarse y sale de la pila.
 *  Justo después f2() termina, y finalmente f3().
 */
