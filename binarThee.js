// rightChild > current


class BinarTree {
  constructor() {
    this.head = null;
    this.amount = 0;
  }

  addNode(number) {
    let NodeBinar = this._createNode(number);

    if (!this.head) {
        this.head = NodeBinar;
    }else {
      let currentNode = this.head;
      let end = true;

      while(end) {

        if (number > currentNode.value) {

            if (!currentNode.rightChild) {
                currentNode.rightChild = this._createNode(number);
                end = false;
            }else {
              currentNode = currentNode.rightChild;
            }

        }else {

          if (!currentNode.leftChild) {
              currentNode.leftChild = this._createNode(number);
              end = false;
          }else {
            currentNode = currentNode.leftChild;
          }

        }

      }
    }

    this.amount++;
    return NodeBinar;
  }


  removeNode() {
    if (!this.head) {
        return new Error('thee not have nodes');
    }else {

      if (this.amount === 1) {
          this.head = null;
      }else {
          let currentNode = this.head;

          if (currentNode.leftChild && !currentNode.rightChild) {
            currentNode = currentNode.leftChild;
          }
          if (!currentNode.leftChild && currentNode.rightChild && !currentNode.rightChild.leftChild) {

          }

      }

    }

  }



  _createNode(number) {
    if (!number) {
      return new Error('value not set')
    }

    let NodeBinar = Object.create(null);
    NodeBinar.rightChild = null;
    NodeBinar.leftChild = null;
    NodeBinar.value = number;
    return NodeBinar;
  }

}
