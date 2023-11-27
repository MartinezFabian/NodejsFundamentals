/* 
  Escriba una función printNumbers(from, to) que genere un número cada segundo,
  comenzando desde from y terminando con to. Usando setInterval.
*/

const printNumbers = (from, to) => {
  let current = from;

  const timerId = setInterval(() => {
    if (current <= to) {
      console.log(current);
    } else {
      clearInterval(timerId);
    }

    current++;
  }, 1000);
};

printNumbers(2, 8);
