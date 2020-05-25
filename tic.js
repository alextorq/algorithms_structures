let edd = true;
let interval = setInterval(() => {
    let event = edd ? 'tic' : 'tok';
    edd = !edd;
    console.log(event)
}, 500);



setTimeout(() => {clearInterval(interval)}, 5000);