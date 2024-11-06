const permutations = (numbers, start) => {
  if (start === numbers.length - 1) {
    console.log(numbers);
  } else {
    for (let i = start; i < numbers.length; i++) {
      [numbers[start], numbers[i]] = [numbers[i], numbers[start]];

      permutations(numbers, start + 1);

      [numbers[start], numbers[i]] = [numbers[i], numbers[start]];
    }
  }
};

let numbersString = prompt("Enter the numbers");

let numbers = numbersString.split(" ");

permutations(numbers, 0);
