const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convertBtn');
const output = document.getElementById('output');

function convertToRoman(num) {
  if (num < 1 || num > 3999) {
    return "Please enter a number between 1 and 3999";
  }

  const romanNumerals = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"]
  ];

  let result = "";
  let digits = num.toString().split("").reverse();

  for (let i = 0; i < digits.length; i++) {
    result = romanNumerals[i][parseInt(digits[i])] + result;
  }

  return result;
}

convertBtn.addEventListener('click', () => {
  const num = parseInt(numberInput.value);

  if (isNaN(num)) {
    output.textContent = "Please enter a valid number";
  } else if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = convertToRoman(num);
  }
});