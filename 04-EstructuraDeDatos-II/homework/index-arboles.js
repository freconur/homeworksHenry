class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }


    add (value) {
        if (value < this.value) {
            this.addToTheLeft(value)
        }else {
            this.addToTheRight(value)
        }
    }

    addToTheLeft(value){
        if(this.left) {
            this.left.add(value)

        }else {
            this.left = new Node(value)
        }
    }

    addToTheRight(value){
        if(this.right) {
            this.right.add(value)

        }else {
            this.right = new Node(value)
        }
    }
}


const root = new Node(20)
root.add(10)
root.add(9)
console.log(root)