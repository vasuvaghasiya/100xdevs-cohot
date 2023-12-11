function mathMethods(value) {
  console.log("Original Value:", value);

  //	Returns x rounded to its nearest integer
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  //Returns x rounded up to its nearest integer
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  //Returns x rounded down to its nearest integer
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);
  
  //returns a random number between 0 (inclusive),  and 1 (exclusive):
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(16.2);
