const names = ["jojo", "pedro", "lucas", "arthur"];
const ages = [18, 20, 14, 900]

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const age = ages[i];

    if (age < 18) {
        console.log(`You are a baby ${name}`);
      } else if (age < 90){
        console.log(`You are an adult ${name}`);
      } else {
        console.log(`You are dead ${name}`);
      }
}