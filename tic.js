let edd = true;
const interval = setInterval(() => {
  const event = edd ? 'tic' : 'tok';
  edd = !edd;
  console.log(event);
}, 500);

setTimeout(() => { clearInterval(interval); }, 5000);
