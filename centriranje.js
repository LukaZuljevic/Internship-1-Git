const m = +prompt("Enter the max number of symbols per line");
let n = +prompt("Enter the max line width");

while (n < m) {
  n = +prompt(`The max line width has to wider then ${m}`);
}

const text = prompt("Paste multiline text here: ");

const lines = text.split("\n");

let continueCode = true;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].length > m) {
    alert(`Line ${i + 1} in text is to long`);
    continueCode = false;
    break;
  }
}

if (continueCode) {
  const centeredLines = lines.map((line) => {
    const leftSpaces = Math.floor((n - line.length) / 2);
    return " ".repeat(leftSpaces) + line;
  });

  centeredLines.forEach((line) => console.log(line));
}
