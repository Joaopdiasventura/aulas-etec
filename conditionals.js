const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Text your age: ', (age) => {
  if (age < 18) {
    console.log("You are a baby");
  } else if (age < 90){
    console.log("You are an adult");
  } else {
    console.log("You are dead");
  }
  rl.close();
});
