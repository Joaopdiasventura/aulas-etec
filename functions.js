function verify(age) {
  if (age < 18) {
    return ("You are a baby");
  } else if (age < 90) {
    return ("You are an adult");
  } else {
    return ("You are dead");
  }
}

console.log(verify(18));
console.log(verify(97));
console.log(verify(5));
console.log(verify(19));