const map = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

map[0][2] = "X"
map[1][1] = "O"
map[2][0] = "X"
map[0][0] = "O"
map[2][2] = "X"
map[1][2] = "O"
map[2][1] = "X"

console.log(map[0]);
console.log(map[1]);
console.log(map[2]);