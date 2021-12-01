//const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   //console.log(char);    //prints out each letter on a new line
//   setTimeout(() => {      //we want the delay to happen while looping
//     process.stdout.write(char); //prints out each letter on the same line
//   }, 5000) // <= 1s delay to make it noticeable. Can dial it down later.
 
// }

// ^^ This code will print ALL characters one second after the program is run,
// if you change it to a larger time, it will still print ALL characters at the same time
// at the specified time. 

//Delaying each character seperately, perhaps each character is 50ms apart

 
//console.log('\n');

const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {                                    //callback is from the second bracket all the way until the comma before 50 
    process.stdout.write(sentence[i])                   //callback are a function that is being passed as a parameter
    if (i === sentence.length - 1) {              
      process.stdout.write(`\n`);             //you need to do this within the async code 
      //OR console.log(''); //but not with '\n' cause console.log already prints things onto a new line, it will make two new lines
    } 
  }, 50 * i)
 
};

//console.log('ab\ncd\n\neef') //to see how \n line works

            //Prints: 
            //ab
            //cd
            //
            ///eef

// If setTimeout was to be written out fully in code
            // const setTimeout = function(callback, time) {
            // //wait(time)
            // callback();
            // };


//But now it's a built in code in JS to use 
// setTimeout(() => {
//   // print the char here
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.



//example of callback, and passing functions into another function (arrow functions)

            // const exampleFunction = (callback) => {
            // console.log('start');
            // callback();
            // console.log('end');
            // };
            // const callback1 = () => {
            //   console.log('exampleexample')
            // };

            // exampleFunction(() => {
            //   console.log('callback');
            // });

            // exampleFunction(callback1);


              