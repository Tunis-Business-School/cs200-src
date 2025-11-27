let num = 10;
if (num > 0) {
  console.log('Number is positive.');
}

let num2 = -5;
if (num2 > 0) {
  console.log('Number is positive.');
} else {
  console.log('Number is non-positive.');
}

let num3 = 0;
if (num3 > 0) {
  console.log('Number is positive.');
} else if (num3 < 0) {
  console.log('Number is negative.');
} else {
  console.log('Number is zero.');
}

let day = 3;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  default:
    console.log('Unknown day');
}

for (let i = 0; i < 5; i++) {
    console.log('Iteration', i);
  }
  
let count = 0;
while (count < 3) {
  console.log('Count:', count);
  count++;
}

let x = 0;
do {
  console.log('Value of x:', x);
  x++;
} while (x < 3);

