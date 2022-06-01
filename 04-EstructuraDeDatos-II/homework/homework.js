'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.


function Node(value){
  this.value = value;
  this.next = null;
}
function LinkedList() {
  this.head = null;
}
//                             //10 - 20 - 30
LinkedList.prototype.add = function(data) {
                   //10 - 20 - 30
  let node = new Node(data);// [data: 30,  next: null]
  let current = this.head;//[data: 10,  next: [data: 20,  next: null]]
  
  if(!current){
    this.head = node
    return node;
  }
  //pero que pasa si this.head ya tiene un nodo
  //entonces preguntamos si current tiene un next

while(current.next){
  current = current.next
}
  current.next = node // [data: 10,  next: [data: 20,  next: [data:30 next: null]]]
  return node
}
// Node ==> value : valor , next = null 

LinkedList.prototype.remove = function() {
//deberiamos retornar null si la lista esta vacia
if(!this.head) return null

//cuando la lista tiene un solo valor haremos lo siguiente
//this.head --> [ data: 10, next: null]

if(!this.head.next) {
  let aux = this.head.value;
  this.head = null;
  return aux;
}
//como se cual es el ultimo valor de la lista para hacerlo debo identificar el elemento de la lista que tenga el next con valor null
//sabemos que 7 es el ultimo valor, pero si nos encutramos en la posicion en donde sae encuenbtra el 7 , ya no tendriamos l aposibilidad de regresar, entonces lo que tenemos que hacer es pararnos en un posicion antes del siete
//                v
// 1  2  3  4  5  6  7 null
  if(this.head.next.next) {
      this.head = this.head.next;
  }
  //si el this.head.next.next no existe o es null
  let aux = this.head.next.value;
  this.head.next = null;
  return aux
}


//search(5)
//            v
 ///head   1  2   3   5   6
LinkedList.prototype.search = function(value) {
  //deberiasmos de trabajar con los value de cada nodo
// search(4)
//  4
//  1  
//  1  2 
//  1  2  3  4  5  6  7  8
//primero invocamos si la lista esta vacia
  if(this.head === null) return null
  let current = this.head
  while(current) {
    if(current.value === value) {
      return value
    } else if(typeof value == 'function') {
      if(value(current.value)) {
        return current.value;
      }
    }
    current = current.next
  }
  return null
}




// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = []

}
HashTable.prototype.hash = function(key) {
  //[ "Hola me llamo franco" ] deberia sumar los valores de cada palabra y nos data un resultado
  // el vendria a ser un string contenido en un array
  let suma = 0;
  for (let i = 0; i < key.length; i++) {
    suma+=key.charCodeAt(i)  
    //lo que hace el charCodeAt es darnos la suma de los valores de cada letra en formato unicode 
  }
  return suma%this.numBuckets //
}
HashTable.prototype.set = function(key, value) {
  //["hola me llamo franco"]
  if(typeof key !== "string") throw new TypeError("Keys must be strings");
  let i = this.hash(key) // el valor q retorna hash va determinar la posicion en el array buckets
  //si retorna 4 deberia de estar en la posicion 
  // [ 1  2  3  4  5  6 ]
  //se analiza si es la primera vez que se guardara ese elemento, de lo contrario se creara un objeto dentro del array
  if(this.buckets[i] === undefined) {
    this.buckets[i] = {}
  }
  //[ , , , ,{key: ? ,  value: ?} , , ,]
  this.buckets[i][key] = value;
  // la key es solo para determinar la posicion en la que se va encontrar cada key, el valor que se le va asignar es value.
}
HashTable.prototype.get = function(key) {
  let i = this.hash(key);
  return this.buckets[i][key] // le estamos diciendo que me retorne el valor de la key no la propiedad en si
}
HashTable.prototype.hasKey = function(key) {
  let i = this.hash(key);
  if(this.buckets[i].hasOwnProperty(key)){
    //hasOwnProperty retorna un booleano --> true or false
    return true
  } else return false
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
