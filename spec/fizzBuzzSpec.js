describe('FizzBuzz', function (){
  var fizzbuzz;

  beforeEach(function(){
   fizzbuzz = new FizzBuzz();
  });

  it('finds a fizzbuzz object', function(){
    expect(fizzbuzz).toEqual(new FizzBuzz());
  });

  describe('when playing', function(){

    it('knows if a number is divisible by 3', function(){
      expect(fizzbuzz.says(3)).toEqual('Fizz');
    });

  });


});
