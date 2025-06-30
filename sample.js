const terms = [
  '5+3',
  '6 - 4',
  '2   *  5  ',
  '9 / 3',
  '10 % 2'
];

// Regular expression for evaluting a term in the form <number> <operator> <number>.
// The expression works with positive and negative numbers (e.g., '-3 + 5').
const termRegExp = /^\s*(?<num1>\d+)\s*(?<operato>(\+|-|\*|\/))\s*(?<num2>\d+)\s*$/;

function calculate(term) {
  if ((matches = termRegExp.exec(term)) !== null) {
    const num1 = Number(matches.groups['num1']);
    const op = matches.groups['operato'];
    const num2 = Number(matches.groups['num2']);
    switch (op) {
      case '+':
        console.log(`${num1} ${op} ${num2} = ${num1 + num2}`);
        return;
      case '-':
        console.log(`${num1} ${op} ${num2} = ${num1 - num2}`);
        return;
      case '*':
        console.log(`${num1} ${op} ${num2} = ${num1 * num2}`);
        return;
      case '/':
        console.log(`${num1} ${op} ${num2} = ${num1 / num2}`);
        return;
    }
  }
  console.log(`The term ${term} is invalid!`);
}

terms.forEach(term => {
  calculate(term);
});
