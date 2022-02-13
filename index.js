hieBro();
setTimeout(() => sorryBro(), 1000);

//function statemant
function hieBro() {
  console.log("hie there");
}
var sorryBro = function () {
  console.log("hie bro");
};

// type convertion

let str = "123";
console.log(Number(str));
console.log(+str);
console.log(parseInt(str));
console.log(true + 1);

// operators

// task 1
{
  let a = 1,
    b = 1;

  let c = ++a; // ?
  let d = b++; // ?
  console.log(a, b, c, d); //2,2,2,1
}

//task 2
{
  let a = 2;

  let x = 1 + (a *= 2);
  console.log(x);
}
//task 3
// "" + 1 + 0; '10'
// "" - 1 + 0; -1
// true + false; 1
// 6 / "3"; 2
// "2" * "3"; 6
// 4 + 5 + "px"; 9px
// "$" + 4 + 5; $45
// "4" - 2; 2
// "4px" - 2; NaN
// "  -9  " + 5; '-9 5'
// "  -9  " - 5; -14
// null + 1; 1
// undefined + 1; NaN
// " \t \n" - 2; -2

//task 4
{
  let a = prompt("First number?", 1);
  let b = prompt("Second number?", 2);

  console.log(+a + +b); // 3
}
{
  console.log(null == false);
  // just for practice
  let a, b, c;

  a = b = c = 2 + 2;

  console.log(a); // 4
  console.log(b); // 4
  console.log(c); // 4
  //just for practise
  let counter = 0;
  let copy = counter++;
  console.log(++counter); //prefix form
  console.log(copy); //postfix form

  // , comma has lower precendence than = assignment

  let complex = (2 * 3, 5 * 4); // 20 last one chosen to here
  // becouse comma , works like this and paranthesis are important
  for (let x = ((a = 1), (b = 3), (c = a * b)); x < 10; x++) {
    console.log("hello");
  }
}

// comparison
// task 1
{
  // 5 > 4; true
  // "apple" > "pineapple"; false
  // "2" > "12"; true
  // undefined == null; true
  // undefined === null; false
  // null == "\n0\n"; false
  // null === +"\n0\n"; false
}

// ifelse
//task 1
{
  if ("0") {
    console.log("hello");
  } // it runs
}
//task 2
{
  let answer = "Right!";
  if (answer == "ECMAScript") {
    console.log("Right");
  } else {
    console.log('you don\'t know? "ECMAScript"!');
  }
}
// task 3
{
  let prompt = "23";
  if (prompt > 0) {
    console.log(1);
  } else if (prompt < 0) {
    console.log(-1);
  } else {
    console.log(0);
  }
}
// task 4
let a = 3;
let b = 1;
let result;
a + b < 4 ? (result = "Below") : (result = "Over");

// task 5
let login = "Director";
let message;
login == "Employee"
  ? (message = "Hello")
  : login == "Director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : (message = "");

console.log(message);
