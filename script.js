const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

function convertToRoman(num) {
  if (num < 1 || num > 3999) {
    return 'Please enter a number between 1 and 3999';
  }

  const romanNumerals = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ];

  let result = '';
  for (const [symbol, value] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

convertButton.addEventListener('click', () => {
  const inputValue = numberInput.value;
  let result;

  if (inputValue === '') {
    result = 'Please enter a valid number';
  } else if (inputValue < 1) {
    result = 'Please enter a number greater than or equal to 1';
  } else if (inputValue > 3999) {
    result = 'Please enter a number less than or equal to 3999';
  } else {
    result = convertToRoman(Number(inputValue));
  }

  output.textContent = result;
});