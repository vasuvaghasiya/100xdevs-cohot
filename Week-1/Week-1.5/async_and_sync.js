// in js default functions are sync functions.
 function findSum(n){
    let result = 0;
    for (let i = 1; i < n; i++) {
        result+=i;
    }
    return result;
}

//example of async function.
function findSumTill1000(){
    console.log(findSum(1000)); 
}
//hear setTimeout function is async function
setTimeout(findSumTill1000,5000);
console.log("hello world");
console.log(findSum(100));




