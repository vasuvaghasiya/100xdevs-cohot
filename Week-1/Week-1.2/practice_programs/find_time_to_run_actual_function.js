
//returns a high resolution timestamp in milliseconds
const startTime = performance.now();


// we can also use Date() object .

/*

const startTime = new Date();

*/
// console.log(startTime);
 function myFunction(){
    // cosnt endTime = new Date();
    const endTime = performance.now();  // Record the end time when the function is executed
    const functionExecutedTime = endTime-startTime; // Calculate the time difference
    console.log(`function executed in ${functionExecutedTime} milliseconds`);
    // console.log(endTime);
}

console.log("Before time out ");

setTimeout(myFunction,1000);  // Set a delay of 1000 milliseconds (1 second)

console.log("After time out ");