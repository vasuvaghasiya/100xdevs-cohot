//A callback is a function passed as an argument to another function

/*A callback function can run after another function has finished */  
//function called another function called as callback function.
function sum(num1,num2,callBack)
{
    let result = num1+num2;
    callBack(result)
}
function displayResult(data){
    console.log("Result of the sum is : " + data);

}


const ans = sum(10,20,displayResult);


