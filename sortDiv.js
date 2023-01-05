const divs = Array.from(document.querySelectorAll('div'));

const mapArray = [[], [], []];

for (const div in divs) {
  const index = div % mapArray.length;
  mapArray[index].push(divs[div]);
}
