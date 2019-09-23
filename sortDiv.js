
var divs = Array.from(document.querySelectorAll('div'));

var mapArray = [[], [], []];


for (var div in divs) {
    var index = div % 3;
    mapArray[index].push(divs[div]);
​
}
