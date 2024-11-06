const n = +prompt("Enter the number of stars");
let j = 1;

for (let i = 1; i <= n; i += 2) {
  console.log(
    " ".repeat(Math.floor(n / 2) - Math.floor(i / 2)) + "*".repeat(i)
  );
}

for (let i = n - 2; i > 0; i -= 2) {
  console.log(
    " ".repeat(Math.floor(n / 2) - Math.floor(i / 2)) + "*".repeat(i)
  );
}
