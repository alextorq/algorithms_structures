export default function solution(text) {
  const result = [];
  let state = 'search_first_char';
  let firstWord = '';
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    switch (state) {
      case 'in_start_word':
        if (char === ' ' || char === '\n') {
          result.push(firstWord);
          firstWord = '';
          state = (char === ' ') ? 'search_new_line' : 'search_first_char';
          break;
        }
        firstWord += char;
        break;
      case 'search_first_char':
        if (char !== '\n' && char !== ' ') {
          firstWord += char;
          state = 'in_start_word';
        }
        break;
      case 'search_new_line':
        if (char === '\n') {
          state = 'search_first_char';
        }
        break;
    }
  }
  return result;
}
