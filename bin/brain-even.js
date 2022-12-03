#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const askName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${askName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const answer = () => {
  let step = 0;
  for (step = 0; step < 3; step += 1) {
    const randomNumer = (Math.round(Math.random() * 100));
    console.log(`Question: ${randomNumer}`);
    const askAnswer = readlineSync.question('Your answer: ');
    if ((randomNumer % 2 === 0) && (askAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((randomNumer % 2 !== 0) && (askAnswer === 'no')) {
      console.log('Correct!');
    } else if ((randomNumer % 2 === 0) && (askAnswer !== 'yes')) {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${askName}`);
      return;
    } else if ((randomNumer % 2 !== 0) && (askAnswer !== 'no')) {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${askName}`);
      return;
    }
  }
  console.log(`Congratulations, ${askName}!`);
};
answer();
