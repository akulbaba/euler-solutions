//Exercise 1;
//Find the sum of all the multiples of 3 or 5 below 1000.

var total = 0;
  for (var i = 0; i < 1000; i++) {   
    if ( i % 3 === 0 || i % 5 === 0) {
     total += i; 
    };
  };
  console.log(total);



 //Exercise 2;
 //By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var a = 0;
var b = 1;
var result = a + b;
var tots = 0

for ( var i = 0; result < 4000000000; i++) {
  if (result % 2 === 0 ) {
    tots += result;
  }
  result = a + b;
  a = b;
  b = result;
};
console.log(tots);



//Exercise 3;
//What is the largest prime factor of the number 600851475142?

var x = 600851475143;
var b = x;
var i = 2;

while ( i < b) {
  while (b % i === 0) {
    (function(z) {
      b = z;
    })
    (b / i)
  }
  i++
}

console.log (b);
  