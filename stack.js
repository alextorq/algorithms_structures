
// LIFO
class Stack {

  constructor() {
      this._list = [];
  }

  push(item) {
    this._list.push(item);
  }
  
  pop() {
      if (!this._list.length) {
        return new Error('stack is empty')
      }
      return this._list.pop();
  }

  count() {
    return this._list.length;
  }

}
