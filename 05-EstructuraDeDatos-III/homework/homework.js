'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

//8
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function(value) {
  if(value > this.value) {
    if(!this.right) { //{value: 5 right: null left: null}
       this.right = new BinarySearchTree(value)
    }else if(this.right) {
      //{value: 5 right: {value 8 , right : null , left: null} , left : null}
       this.right.insert(value)
    }
  }
  //para la izquierda
  if(value < this.value) {
    if(!this.left) {
       this.left = new BinarySearchTree(value);
    } else if ( this.left ){
       this.left.insert(value);
    }
  }
}
BinarySearchTree.prototype.size = function() {
  if(!this.right && !this.left) return 1;
  if(!this.right && this.left) return 1 + this.left.size();
  if(this.right && !this.left) return 1 + this.right.size();
  if(this.right && this.left) return 1 + this.left.size() + this.right.size();

}
BinarySearchTree.prototype.contains = function(value) {
  if(value === this.value) return true;

  // if(!this.right && !this.left) return false;
  if(value > this.value) {
    if(!this.right) return false;
    else return this.right.contains(value)
  }

  if(value < this.value) {
    if(!this.left) return false;
    else return this.left.contains(value);
  }
}
BinarySearchTree.prototype.depthFirstForEach = function() {}
BinarySearchTree.prototype.breadthFirstForEach = function() {}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
