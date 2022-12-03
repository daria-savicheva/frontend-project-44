import readlineSync from 'readline-sync';

const userName = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!`);
};

export default userName;
