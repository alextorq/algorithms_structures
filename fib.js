function time(cb) {
    const start = performance.now();
    const work = cb();
    const end = performance.now();
    console.log(`work took ${end - start} ms, answer is ${work}`);
}


function fib(n) {
    let a = 1, b = 1, i = 3;
    const iter = () => {
        if (i <= n) {
            [a, b] = [b, a + b];
            i++;
            return iter;
        }
        return b;
    }

    let answer = iter();
    while(typeof answer === 'function') {
        answer = iter();
    }

    return answer;
}

function fib2(n) {
    let a = 1, b =1;
    for(let i = 3; i <= n; i++) {
        const c = a + b;
        a = b
        b = c;
    }
    return b;
}

function fib3(n) {
    if (n <= 1) {
        return 1;
    }
    return fib3(n - 1) + fib3(n - 2);
}

const m = new Map();

m.set(null, 1);
m.set({}, 1);
m.set({}, 2);


const f = {}

f[null] = 1;
f[1] = 2;
f['1'] = 3
f[{}] = 3
f[{}] = 34

