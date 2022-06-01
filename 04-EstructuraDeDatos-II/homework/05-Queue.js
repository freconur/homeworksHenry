const { Queue } = require("../estructuras");
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola

var controlAcces = function (queue, event) {
  // Tu código aca:
  // crean instancia de Queue
  // los que cumplen los rquerimientos solo agregan (push) al array sus names
  // en caso que no cumplan los dequeue de la queue
  let arr = [];
  let access = [];
  while (queue.size()) {
    let subject = queue.dequeue();
    if (
      subject.age >= 18 &&
      subject.ticket.event === event &&
      !acc.includes(subject.ticket.number)
    ) {
      access.push(subject.ticket.number);
      arr.push(subject.fullname);
    }
  }
  return arr;
};

// Test Queue
const queue = new Queue();
queue.enqueue({
  fullname: "Mauro",
  age: 17,
  ticket: { number: 1, event: "Day" },
});
queue.enqueue(6);
queue.enqueue("Hola");
console.log(queue);
// var controlAcces = function (queue, event) {
//   let arr = [];
//   let access = [];
//   while (queue.size()) {
//     let subject = queue.dequeue();
//     if (
//       subject.age >= 18 &&
//       subject.ticket.event === event &&
//       !acc.includes(subject.ticket.number)
//     ) {
//       access.push(subject.ticket.number)
//       arr.push(subject.fullname)
//     }
//   }
//   return arr
// };

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

let array = [1, 2, 3, 1, 2, 3, { a: 1 }, { a: 1 }];
let demo = new Set(array);

/* ---------------------------------------------------------------------------------------------------- */

// Cola de banco

// First in First Out

// Vemos lo ya implementado en el archivo estructuras.js
// class Queue {
//   constructor() {
//     this.queue = [];
//   }
//   enqueue(el) {
//     this.queue.push(el);
//   }
//   dequeue() {
//     return this.queue.shift();
//   }
//   size() {
//     return this.queue.length;
//   }
// }

/*
  Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
  debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
  Ejemplo:
  - queueOne: [1,3,5]
  - queueTwo: [2,4,6]
  mergeQueues(queueOne, queueTwo) --> [1,2,3,4,5,6]
  IMPORTANTE: Lo que recibe NO son arreglos sino que son Queues.
  */
var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  var newQueue = new Queue();

  // [1, 3, 5]           [2, 4, 6]                           ----> [3, 5]             [4, 6]
  while (queueOne.size() || queueTwo.size()) {
    var one = queueOne.dequeue(); // one = 1
    var two = queueTwo.dequeue(); // two = 2
    one && newQueue.enqueue(one); // newQueue = [1]
    two && newQueue.enqueue(two); // newQueue = [1, 2]
  }

  return newQueue;
};
/*
  // &&
v    v    v  --> 2do elemento
v    f     f
f   v      f
f   f      f
  
  // ||
  v    v    v  --> 1 elemento
v    f     v
f   v      v
f   f      f


  */

/* -----------------------------------------------------------*/

//Realiza una funcion que filtre los numeros del array recibido y arme una queue con el resto de los elementos
//Ejemplo
// let array = [1, "a", 2, "b", [1, 2, 3]]
// filtraQueue(array)
// -> ["a", "b", [1, 2, 3]]

function filtraQueue(arg) {
  var queue = new Queue();
  for (i = 0; i < arg.length; i++) {
    if (typeof arg[i] !== "number") {
      queue.enqueue(arg[i]);
    }
  }
  return queue;
}

module.exports = {
  controlAcces,
};
