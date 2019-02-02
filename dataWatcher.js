let data = { price: 5, quantity: 2 }
/*
	Ссылка на фукнкцию которую потом запишем в массив в другоми функция которые необходимо будет выполнить
	при изменении свойства
*/
let target = null;

class DataWatcher {

	constructor(data) {
	
		for (let key in data) {
			!function () {
				let internalValue = data[key];

				/*
					Для каждого свойства обьекта свой обьект с зависимостями
					он лежит для каждого свойства в замыкании
				*/
				let dep = new Dep(key);

				/*
					 get и set это функции и у них есть scope который ссылкается на анонимную функцию см ст 13
					 в которой и хранится обьект Deb
				*/
				Object.defineProperty(data, key, {
					get() {
						dep.depend();
						return internalValue
					},
					set(newVal) {
						internalValue = newVal;
						dep.rerend() 

					}
				});

			}();
		}

	}

	addWatcher(newDeb) {
		target = newDeb;
		target();
		target = null;
	}


}


class Dep {
	constructor (name) {
		this.subscribers = [];
		this.name = name;
	}
	depend () {
		if (target && !this.subscribers.includes(target)){
			this.subscribers.push(target)
		}
	}
	rerend () {
		this.subscribers.forEach(sub => sub())
	}
}


var dataCartWatcher = new DataWatcher(data);

var node = document.querySelector('h1');

dataCartWatcher.addWatcher(() => {node.innerHTML = data.price * data.quantity});



