const { Stack, Queue } = require("../estructuras");

// function sumar(a,b){
//   return a+b
// } 
// let nuevaSuma = sumar;
// console.log(nuevaSuma(2,4));

// console.log("que es Stack", Stack)
// const personas = new Stack
// console.log("que es newStack", personas)
// personas.colocar({name:"Mau", edad:44})
// personas.colocar({name:"Juandy", edad:17})
// console.log("que es newStack", personas)

// console.log("que es newStack", personas.array)
// console.log("que es newStack", personas.array[1])
// console.log("que es newStack", personas.array[1].name)

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras

// Salida:
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas.

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado oro : raM odaluzA oro

function efectoEspejo(str) {
  //tu codigo aqui
  const instacia1DeStack = new Stack();
  let stringInvertido = "";
  // push , pop size
  // metodos str [1,2,3] 1 ---> stringInvertido "... ... 1"] concat push unshift pop s
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      while (instacia1DeStack.size() > 0) {
        stringInvertido = stringInvertido + instacia1DeStack.quitar();
      }
      stringInvertido = stringInvertido + str[i];
    } else {
      instacia1DeStack.colocar(str[i]);
    }
  }
  while (instacia1DeStack.size() > 0) {
    stringInvertido = stringInvertido + instacia1DeStack.quitar();
  }
  // instacia1DeStack.push()
  // console.log(instacia1DeStack) // Stack { array: [] }
  return stringInvertido; // "elihC ureP"
}

const stackito = new Stack();
stackito.colocar({ name: "Jaja" });
stackito.colocar(3);
console.log(stackito);

// [{{{{{{{{{{}}}}}}}}}}]
// [{}{}{}{}{}]
// [[{}{}{}]]
// {[{{{{{{}}}}}}]}
// [{{{}{}{}{}{}}}]

// function efectoEspejo(str) {
//     //tu codigo aqui
//     const reverse = new Stack()
//     let temp = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             console.log("stack reverse is: ", reverse)
//             while (reverse.size() > 0) {
//                 temp += reverse.pop();
//             }
//             temp += str[i]
//         } else {
//             reverse.push(str[i])
//         }
//     }
//     while (reverse.size() > 0) temp += reverse.pop();
//     return temp
// }
// // const miniStack = new Stack();
// // miniStack.push("Cordoba Salta Tucuman Neuquen Jujuy");
// // console.log(miniStack);

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------------------------------------------*/
// Last in First Out
// Vemos lo ya implementado en el archivo estructuras.js
// function Stack() {
//   this.stack = [];
// }

// Stack.prototype.push = function (el) {
//   this.stack.push(el);
// };

// Stack.prototype.pop = function () {
//   return this.stack.pop();
// };

// Stack.prototype.size = function () {
//   return this.stack.length;
// };

/* ************************************************************************************************* */
/*
  Desarrolla una funcion que al recibir un string, evalue si la cantidad de parentesis estan balanceados
  Debes usar metodos de STACK

  ej. parentesisBalanceaDOS("(hola (que (tal)))") --> Todo esta ok
  ej. parentesisBalanceaDOS("(hola (que (tal)") --> Hay uno o mas paréntesis desbalanceados
  */

function parentesisBalanceaDOS(str) {
  var stack = new Stack();
  var stack2 = new Stack();
  for (let i = 0; i < str.length; i++) {
    // ( h o l a  ( q u e ( t a l ) ) )
    //                                  i
    if (str[i] === "(") {
      stack.push(str[i]);
    }
    // stack = []
    else if (str[i] === ")") {
      stack2.push(str[i]);
    }
  }
  if (stack.size() !== stack2.size())
    return "Hay uno o mas parentesis desbalanceados";
  else return "Todo esta ok";
}

module.exports = {
  efectoEspejo,
};
