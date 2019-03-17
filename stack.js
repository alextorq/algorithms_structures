
// LIFO
class Stack {

  constructor() {
      this._count  = 0;
      this._list = [];
  }

  push(item) {
    this._list.push(item);
    this._count++;
  }
  
  pop() {
      if (!this.count) {
        return new Error('stack is empty')
      }
      return this._list.pop();
      this._count--
  }

  peek() {
    if (!this.count) {
      return new Error('stack is empty')
    }
    return this._list(this._count - 1);
  }

  count() {
    return this._count;
  }



}
