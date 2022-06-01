'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) { //3
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  //3!= 3 * 2!
  //2!= 2 * 1!
  //1!= 1  --> sera el caso base 
  //0!= 1  --> sera el caso base

  if(n > -1 && n < 2)    return 1;  // si estao se cumple me va a devolver su valor que sera 1 para que no siga con la logica

  //como no existe un factorial de valor negativos creamos la siguiente condicion

  if (n < 0 )  return 0;         // tiene que retornarme total

  return n *  nFactorial( n - 1);                //por ultimo quiero que me devuelva el valor de n multiplicado con
                              // el valor que sigue invocado por la funcion factorial
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

  // debe de haber caso base 
  // una excepcion 
  // llamada recursiva 

  if( n ===  0 || n === 1 ) return n
    
  // if( n ===  0  ) return n;

  return nFibonacci(n-1) + nFibonacci(n-2);

}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(argumento) {
  this.array.push(argumento);
}
Queue.prototype.dequeue = function() {
  return this.array.shift()
}
Queue.prototype.size = function() {
  return this.array.length;
}

// queue = new Queue()




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
