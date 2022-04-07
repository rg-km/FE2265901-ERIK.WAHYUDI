// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let result = ''
  for (let i = 0; i < n; i++) {
    let spaces = ' '.repeat(n - i - 1)
    let hashes = '#'.repeat(i + 1)
    result += `${spaces}${hashes}\n`
  }
  return result
}

function main() {
  const n = 6

  let result = staircase(n);
  console.log(result)
}

main(); // execute program

module.exports = staircase