function countArgs(...args) {
  let count = args.length;
  alert(`Було передано ${count} аргумент(и/ів): [${args.join(', ')}]`)
}

function compareNumbers() {
  const a = Number(prompt("Введіть перше число:"));
  const b = Number(prompt("Введіть друге число:"));

  if (a < b) alert(`-1 (перше число менше, ніж друге)`)
  else if (a > b) alert(`1 (перше число більше, ніж друге)`)
  else alert(`0 (числа рівні)`);
}


function countFactorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * countFactorial(n - 1);
}

function factorial() {
  const input = getValidNumber("Введіть ціле невід’ємне число:");
  const number = Number(input);

  if (Number.isInteger(number) && number >= 0) {
    const result = countFactorial(number);
    alert(`Факторіал числа ${number} дорівнює ${result}`);
  } else {
    alert("Будь ласка, введіть коректне ціле невід’ємне число.");
  }
}

function combineDigits(a, b, c) {
  return (`Були передані числа ${a}, ${b}, ${c}, отримане число: ${a}${b}${c}`);
}


function calculateArea(length, width = length) {
  let area = length * width;
  alert(`Площа прямокутника із сторонами ${length} і ${width} довівнює ${area}`);
}

// Функція для перевірки, чи є число досконалим
function isPerfectNumber(num) {
  if (num <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      const paired = num / i;
      if (paired !== i) sum += paired;
    }
  }
  return sum === num;
}


// Функція для отримання коректного числа від користувача
function getValidNumber(message) {
  let value;
  do {
    const input = prompt(message);
    value = parseInt(input, 10);
  } while (isNaN(value));
  return value;
}


function perfectNumber() {
  let num;
  num = getValidNumber("Введіть натуральне число:");

  if (isPerfectNumber(num)) {
    alert(`${num} — це досконале число!`);
  } else {
    alert(`${num} не є досконалим числом.`);
  }
}

function findPerfectNumbers() {
  let min, max;

  // Повторювати, поки користувач не введе коректну пару чисел
  do {
    min = getValidNumber("Введіть мінімальне число діапазону:");
    max = getValidNumber("Введіть максимальне число діапазону:");
    if (min > max) {
      alert("Мінімальне число не може бути більшим за максимальне. Спробуйте ще раз.");
    }
  } while (min > max);

  const perfectNumbers = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }

  if (perfectNumbers.length > 0) {
    alert(`Досконалі числа в діапазоні від ${min} до ${max}: ${perfectNumbers.join(", ")}`);
  } else {
    alert(`У діапазоні від ${min} до ${max} немає досконалих чисел.`);
  }
}
