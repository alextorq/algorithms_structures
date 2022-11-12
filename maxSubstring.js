function getMaxSubstring(str) {
    const length = str.length;
    const map = new Map();
    let answer = 0;
    let start = 0

    for (let i = 0; i < length; i++) {
        if (map.has(str[i])) {
            start = Math.max(map.get(str[i]), start);
        }
        answer = Math.max(answer, i - start + 1);
        map.set(str[i], i + 1);
    }

    return answer;
}


console.log(getMaxSubstring('a b c a c b b'));
