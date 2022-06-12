class Calculator {
  constructor(n, y) {
    this.num1 = n;
    this.num2 = y;
  }
  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
}

const bill = new Calculator(1, 2);
// console.log(bill.subtract());
