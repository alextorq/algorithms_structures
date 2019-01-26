
class LinkedList {

	constructor() {
		this.head = null;
		this.length = 0;
	}

	add(value) {
		if (!value) {
			console.log('you need set a value')
		}

		let node = this._createNode(value);

		if (!this.head) {
			this.head = node;

		}else {
			let last = this.head;
			while(last.next) {
				last = last.next;
			}
			last.next =  node;
		}
		this.length++;
		return node;
	}


	_createNode(value){
		let node = Object.create(null);
		node.value = value;
		node.next = null;
		return node;
	}

	remove(value) {

		let node = this.head;
		let nodeBoforeDelete = this.head;
		let count = 1;

		if (!this.length) {
			console.log('linked list is empty')
			return;
		}

		while(value !== node.value && count < this.length) {
			nodeBoforeDelete = node;
			node = node.next;
			count++
		}
		if (count === 1) {
			let deleteNode = this.head;
			this.head = this.head.next;
			this.length--;
			return deleteNode;
		}

		if (value === node.value) {
			let nodeForRetirn = node;
			node = node.next;
			nodeBoforeDelete.next = node;
			this.length--;
			return nodeForRetirn;

		}else{
			console.log('the value is not are in list')
			return
		}

		
	}


}

let list = new LinkedList;
list.add(1)
list.add(2)
list.add(3)
list.add(4)