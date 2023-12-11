/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor()
  {
    this.result=0;
  }
  
  add(value){
    this.result+=Number(value);
  }

  subtract(value){
    this.result-=value
  }

  multiply(value)
  {
    this.result*=value
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    // if (number !== 0) {
    //   this.result /= number;
    // }
    else{
      this.result /= number;
    }

  }

  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(expression) {
     // (\s)Remove multiple continuous spaces and trim the expression
     const cleanedExpression = expression.replace(/\s+/g, ' ').trim();

     // Check for invalid non-numerical characters in the expression
      
     //The regular expression /^[0-9+\-*/(). ]+$/ ensures that the expression consists of digits (0-9), arithmetic operators (+, -, *, /), parentheses (), and spaces.
     
     if (!/^[0-9+\-*/(). ]+$/.test(cleanedExpression)) {
       throw new Error("Invalid characters in the expression");
     }
     
    try {
      this.result = eval(cleanedExpression);
    } catch (error) {
      throw new Error("Invalid expression");
    }   
  }

}

let cal = new Calculator();
cal.add(50);
console.log(cal.getResult());

cal.subtract(5);
cal.multiply(5);
cal.divide(2);
console.log(cal.getResult());
cal.calculate("2 * (3 + 4)");
console.log(cal.getResult());
// cal.clear();

module.exports = Calculator;
