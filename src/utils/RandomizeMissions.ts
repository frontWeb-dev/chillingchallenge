export const randomizeMissions = () => {
  var numbers: number[] = [];

  while (numbers.length < 3) {
    var randomNumber = Math.floor(Math.random() * 19) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    };
  };
  return numbers;
};