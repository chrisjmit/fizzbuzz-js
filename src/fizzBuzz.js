function FizzBuzz () {

  FizzBuzz.prototype.says = function(n) {
    if (n % 15 === 0){
      return "FizzBuzz";
    }
    else if (n % 5 === 0){
      return "Buzz";
    }
    else if (n % 3 === 0){
      return "Fizz";
    }
  };
}
