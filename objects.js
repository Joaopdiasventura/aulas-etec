const user = {
  name: "Jojo",
  email: "jojo@gmail.com",
};

console.log(user.name);
console.log(user["email"]);

if ("name" in user) {
  console.log("This user has a email");
}

const users = [user, { name: "Lucas", email: "lucas@gmail.com" }];

console.log(users[0].name);
console.log(users[1]["email"]);

const data = {
  names: ["Jojo", "Lucas"],
  email: ["jojo@gmail.com", "lucas@gmail.com"],
  all: [
    {
      name: "Jojo",
      email: "jojo@gmail.com",
    },
    {
      name: "Lucas",
      email: "lucas@gmail.com",
    },
  ],
};

console.log(data["all"][0]["email"]);
console.log(data.all[1].name);