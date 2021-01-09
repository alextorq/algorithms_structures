function process(width, queue) {
    let next = 0;
    const resolvers = Array(queue.length);
    const results = queue.map((f, i) => new Promise(resolve => {
        resolvers[i] = resolve;
    }));

    queue.slice(0, width).forEach(processNext);
    return Promise.all(results);

    function processNext() {
        const i = next++;
        if (i >= queue.length) return;
        queue[i]().then(result => {
            resolvers[i](result);
            processNext();
        })
    }
}

// Демонстрация
const rand = () => (Math.random() * 2000 + 50) | 0;
const mockRequest = url => new Promise(resolve => {
    const t = rand();
    console.log('Mock ' + url, t);
    setTimeout(() => resolve(url + ' fetched'), t)
});

const requests = [
    () => mockRequest('http://google.com'),
    () => mockRequest('http://yandex.ru'),
    () => mockRequest('http://vk.com'),
    () => mockRequest('http://habr.com'),
    () => mockRequest('http://t.me'),
    () => mockRequest('http://twitter.com'),
];

(async () => {
    const result = await process(2, requests);
    console.log(result);
})();

