function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let arr = [1];
    let i = 2
  while(num !== 1) {
    if(num%i === 0) {
      arr.push(i)
      num = num/i
    }else {
      i++
    }
  }
  return arr
  }
  
  function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    //[11 9 8 17 14 10 5 2]
    let swap = true;
    while(swap) {
      swap = false;
      for (let i = 0; i < array.length -1 ; i++) {
        if(array[i] > array[i+1]){
          let num = array[i]; //11
          array[i] = array[i+1];//9
          array[i+1] = num // 11
          swap = true
        }
    }
  }
  return array
  }
  
  
  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    //[11 9 8 17 14 10 5 2]
    for (let i = 0; i < array.length; i++) {
      if(array[i + 1] < array[i]) {
        let aux = array[i]; //11 
        array[i] = array[i+1] //9
        array[i+1] = aux;
      }
    }
    return array;
  }
  
  
  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
  
  }

  // ejercicios resuletos de los checkpoint

  function countDeep(arr) {
    // Tu código aca:
    let suma = 0;
    arr.forEach(function (elemneto) {
      suma++
       if (Array.isArray(elemneto)) {
        suma = + countDeep(elemneto);
       }
        else suma++;
      });
    return suma;
  }

  // checkpoint 
  function joinLinkedList(linkedListOne, linkedListTwo) {
    // Tu código aca:
    let currentOne = linkedListOne.head;
    let currentTwo = linkedListTwo.head;
    let newList = new LinkedList();
    newList.add(currentOne.value);
    currentOne = currentOne.next;
    while (currentTwo || currentOne) {
      if (currentTwo) {
        newList.add(currentTwo.value);
        currentTwo = currentTwo.next;
      }
      if (currentOne) {
        newList.add(currentOne.value);
        currentOne = currentOne.next;
      }
    }
  
    return newList;
  }

  // checkpoint 
  function specialSort(array, swapFunction) {
    // Tu código aca:
    let swap = true
    while(swap) {
      swap = false
      for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length-1; j++){
          if(swapFunction(arrayOne[j],arrayOne[j+1]) == -1){
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
          }
        }
      }
    }
    return array;

    // function specialSort(array, swapFunction) {
    //   // Tu código aca:
    //     // Tu código aca:
    //     var temp;
    //     for(var i = 0; i < array.length; i++){
    //       for(var j = 0; j < array.length-1; j++){
    //         if(swapFunction(array[j],array[j+1]) === -1){
    //           temp = array[j];
    //           array[j] = array[j+1];
    //           array[j+1] = temp;
    //         }
    //       }
    //     }
    //   return array;
    // }
  }
  
  var arrayOne = [
    { name: "Franco", age: 26, height: 1.85 },
    { name: "Toni", age: 30, height: 1.75 },
    { name: "Mati", age: 25, height: 1.77 },
    { name: "Leo", age: 40, height: 1.83 },
  ];
  
  var functionOne = function (el1, el2) {
    if (el1.age > el2.age) return -1;
    return 1;
  };
  
  
  console.log(specialSort(arrayOne, functionOne));

  //checkpint 
  LinkedList.prototype.orderList = function() {
    // Tu código aca:
    let miList = this.head; //me guardo mi lista
    if (!miList.next) return miList;
    let curt1 = this.head;
    let curt2 = curt1.next;
    while (curt1.next) {
        if (curt1.value > curt2.value) {
            let aux = curt1.value; // me guardo el 5
            curt1.value = curt2.value;
            curt2.value = aux;
            return this.orderList();
        } else {
            curt1 = curt2;
            curt2 = curt2.next;
        }
    }
};

//checkpoint
LinkedList.prototype.insert = function(data, pos) {
    let curt1 = this.head; //guardando la lista
    let curt2 = curt1.next;
    let newNode = new Node(data); //genere mi nodo a insertar
    if (pos === 1) {
        newNode.next = curt1
        this.head = newNode;
        this.len++;
        return
    }
    let count = 1;
    while (curt1) {
        if (count === pos - 1) {
            let aux = curt2;
            curt1.next = newNode;
            newNode.next = aux;
            this.len++;
            return
        }
        curt1 = curt2;
        curt2 = curt2.next;
        count++;
    }
};

//checkpoint 
var mergeLinkedLists = function (linkedListOne, linkedListTwo) {
    // Tu código aca:
    const nuevaLista = new LinkedList();
    let current1 = linkedListOne.head;
    let current2 = linkedListTwo.head;
  
    while (current1 || current2) {
  
      nuevaLista.add(current1.value)
      nuevaLista.add(current2.value)
  
      current1 = current1.next;
      current2 = current2.next;
    }
    return nuevaLista;
  }


  ///checkpoint 
  let newList = new LinkedList();

  while (linkedListOne.head.next || linkedListTwo.head.next) {
      let curtL1 = linkedListOne.head.value;
      let curtL2 = linkedListTwo.head.value;
      newList.add(curtL1);
      newList.add(curtL2);
      linkedListOne.head = linkedListOne.head.next;
      linkedListTwo.head = linkedListTwo.head.next;
  }
  
  newList.add(linkedListOne.head.value);
  newList.add(linkedListTwo.head.value);
  return newList;