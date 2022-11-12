
const divs = Array.from(document.querySelectorAll('div'));

const mapArray = [[], [], []];

for (let div in divs) {
    const index = div % mapArray.length;
    mapArray[index].push(divs[div]);
}
