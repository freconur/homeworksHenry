function BinarySearchTree(value) {
    //recordermos que los arboles binarios tienen 0 , 1 , 2 valores como maximo
    //quiero insertar un nuevo valor a ese rigth cuando pase el valor 8 al nodo padre
    //             5
    this.value = value ;  // 5 como ejemeplo
    this.right = null; 
    // el nuevo righ tendra como valor:
    // this.right = {value: 8, right: null, left: null}
    this.left = null;
  }
  //tenemos que agregarles 5 metodos
  // BinarySearchTree.insert(8)
  // BinarySearchTree.insert(12)
  BinarySearchTree.prototype.insert = function(value) {
    if(value > this.value) {
      if(this.right === null) {
        this.right = new BinarySearchTree(value)
      } else if(this.right){
        this.right.insert(value)
      }
    } 
    if(value < this.value) {
      if(this.left === null) {
        this.left = new BinarySearchTree(value)
      } else if(this.left){
        this.left.insert(value)
      }
    }
  }
  //             5  
  //           /   \
  //         null   6   
  //                 \
  //                  7
  //                /   \
  //               6.5    null
  BinarySearchTree.prototype.contains = function (value) {
    if(value === this.value) return true
  
    if(value > this.value) {
      if(this.right === null) return false;
      else return this.right.contains(value);
    }
  
    if( value < this.value) {
      if(this.left === null) return false;
      else return this.left.contains(value);
    }
  }
  BinarySearchTree.prototype.depthFirstForEach = function (funcion, order) {
    //puede llegar un in-order
    // funcion --> function(val){ testArr.push(val)
  
    //puede llegar un pre-order
    if(order === "pre-order") {
      //root - left - right
      funcion(this.value);
      if(this.left !== null) this.left.depthFirstForEach(funcion, order)
      if(this.right !== null) this.right.depthFirstForEach(funcion, order)
    }
      //puede llegar un post-order
    else if(order === "post-order") {
      // left - right - root
      if(this.left !== null) this.left.depthFirstForEach(funcion, order)
      if(this.right !== null) this.right.depthFirstForEach(funcion, order)
      funcion(this.value);
    }
    
    // puede llegar un in-order
    else {
      //left - root - right
      if(this.left !== null) this.left.depthFirstForEach(funcion, order)
      funcion(this.value);
      if(this.right !== null) this.right.depthFirstForEach(funcion, order)
    }
  }
  BinarySearchTree.prototype.breadthFirstForEach = function (funcion, arr = []) {
  
    // funcion(this.value)
  
    if(this.left !== null) {
      arr.push(this.left)
    }
  
    if(this.right !== null) {
      arr.push(this.right)
    }
  
    funcion(this.value);
  
    if(arr.length > 0) {
      arr.shift().breadthFirstForEach(funcion, arr)
    }
  
  }
  BinarySearchTree.prototype.size = function () {
    if(this.right === null && this.left === null) return 1;
  
    if(this.left !== null && this.right === null) return 1 + this.left.size();
    
    if(this.right !== null && this.left === null) return + this.right.size();
  
    if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();
  }
  
  
  
  // No modifiquen nada debajo de esta linea
  // --------------------------------
  
  module.exports = {
    BinarySearchTree
  };