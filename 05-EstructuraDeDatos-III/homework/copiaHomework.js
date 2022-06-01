function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  BinarySearchTree.prototype.insert = function(value){
  
    if(value > this.value) {
      if(!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value)
      }
    }
  
    if(value < this.value) {
      if(!this.left) {
        this.left = new BinarySearchTree(value)
      } else {
        this.left.insert(value)
      }
    }
  }
  BinarySearchTree.prototype.size = function(){
    if(!this.left && !this.right) return 1 ;
    if(!this.left && this.right) return 1 + this.right.size();
    if(this.left && !this.right) return 1 + this.left.size();
    if(this.left && this.right) return 1 + this.left.size() + this.right.size();
  }
  BinarySearchTree.prototype.contains = function(value){
    if(this.value ===  value) return true;
  
    if(value > this.value) {
      if(!this.right) return false;
     else return this.right.contains(value)
    }
    if(value < this.value) {
      if(!this.left) return false;
     else return this.left.contains(value);
    }
  }
  BinarySearchTree.prototype.depthFirstForEach = function(funcion, order){
    // pre-order   ----> rool - left - right
    if( order === "pre-order") {
      funcion(this.value);
      if(this.left) this.left.depthFirstForEach(funcion, order);
      if(this.right) this.right.depthFirstForEach(funcion,order);
    } else if ( order === "post-order") {
      //post-order  ----->   left - right - root
      if(this.left) this.left.depthFirstForEach(funcion,order)
      if(this.right) this.right.depthFirstForEach(funcion,order)
      funcion(this.value);
    } else {
      //in-order ----->  left - root - right
      if(this.left) this.left.depthFirstForEach(funcion, order);
      funcion(this.value);
      if(this.right) this.right.depthFirstForEach(funcion,order);
    }
  }
  BinarySearchTree.prototype.breadthFirstForEach = function(funcion, arr=[]){
    if(this.left) arr.push(this.left)
    if(this.right) arr.push(this.right)
    funcion(this.value)
    if(arr.length > 0 ) {
      arr.shift().breadthFirstForEach(funcion, arr)
    }
  }