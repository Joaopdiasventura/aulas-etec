const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(expression) {
  if (expression.trim().length == 0) return "Digite uma expressão válida";

  const result = eval(expression);

  if (isNaN(result)) return "Digite uma expressão válida";

  return result;
}

rl.question("Digite uma conta matemática: ", (expression) => {
  console.log(calculate(expression));
  rl.close();
});