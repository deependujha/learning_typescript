console.log("hello world")

// to run the program, use commad:
// tsc 06_hello_world.ts
// it will generate an equivalent js file.


// =================================================================================

// This is an industrial-grade general-purpose greeter function:
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }

// greet("Brendan");

// =================================================================================

// even if the above code has issues it will still convert it into the js,
// but if we wish not to convert into js code if there's an issue, use command:

// tsc --noEmitOnError hello.ts

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
export { }