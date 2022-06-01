LinkedList.prototype.add = function(value) {
    let node = new Node(value) // new Node = data: 10 ; next: null
    let valorActual = this.head
    if(valorActual === null) {
      this.head = node
      return node
    }
    while(valorActual.next) {
      valorActual = valorActual.next
    }
    valorActual.next = node
    return node
  }
  // Node ==> value : valor , next = null 
  LinkedList.prototype.remove = function() { // L - 1 - null
    let valorActual = this.head;
     if(valorActual === null){
      return null
     }
     if(valorActual && !valorActual.next) {
      let aux = valorActual.value;
      this.head = null;
      // this.length--;
      return aux;
     }
     while(valorActual.next.next) {
      valorActual = valorActual.next;
     }
     let aux = valorActual.next.value;
     valorActual.next = null ;
     this.length--;
     return aux;
  }
  LinkedList.prototype.search = function() {
  
  }



  function LinkedList() {
    this.head = null
  }
  function Node(data){
    this.data = data; //12
    this.next = null; // null
  }
  
                                    
                                    // 10 - 20 - 30
  LinkedList.prototype.add = function(data) {
                        //10 - 20 - 30
    let node = new Node(data) // [data: 30 next: null]
    let current = this.head // node  [data: 10, next: [data: 20, next: null] ] || [data: 20, next: null]
    if(!current) {
      current = node // 1- [ data: 10, next null] // 2- [data: 20, next: null] 
      return node //  [ data: 10, next null]
    }
    //pero si ya existe un nodo
    while(current.next) { //[data: 10, next: [data: 20, next: null] ]
      current = current.next // [ data: 10, next: null] 
    }
    current.next = node // current.next toma el nuevo valor de node   [data: 10, next: [data: 20, next: [data: 30 next: null]] ] 
    return node
    }

    LinkedList.prototype.remove = function() { // L - 1 - null
      // let valorActual = this.head;
      //  if(valorActual === null){
      //   return null
      //  }
      //  if(valorActual && !valorActual.next) {
      //   let aux = valorActual.value;
      //   this.head = null;
      //   // this.length--;
      //   return aux;
      //  }
      //  while(valorActual.next.next) {
      //   valorActual = valorActual.next;
      //  }
      //  let aux = valorActual.next.value;
      //  valorActual.next = null ;
      //  this.length--;
      //  return aux;
    }