import readline from 'node:readline'; 

import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

rl.question("Nhập một số? ", (number) => {
  number = parseInt(number);
  if (number < 2 || isNaN(number)) {
    console.log("Không phải là số nguyên tố");
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log("Là số nguyên tố");
    } else {
      console.log("Không phải là số nguyên tố");
    }
  }

  rl.close();
});
