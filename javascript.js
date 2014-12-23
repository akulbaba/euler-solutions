function one() {

var total = 0;
  for (var i = 0; i < 1000; i++) {   
    if ( i % 3 === 0 || i % 5 === 0) {
     total += i; 
    };
  };
alert(total);
};

function two() {

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
alert(tots);
};

function three() {

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
};
alert(b);
};