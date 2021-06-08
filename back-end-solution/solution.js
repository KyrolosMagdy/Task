const str = 'AB CD';

const solution = (s) => {
  const arr = s.split('');
  const solutionArray = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (i === 0 && j === 1) {
        solutionArray.push(arr.join(''));
      }

      if (s[i] !== ' ' && s[j] !== ' ') {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        solutionArray.push(arr.join(''));
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return solutionArray;
};

console.log(solution(str));
