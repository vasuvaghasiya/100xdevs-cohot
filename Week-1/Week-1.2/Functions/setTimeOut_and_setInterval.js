 function greet(){
    console.log("hello greet");
}
 function greeting(){
    console.log("hello greeting");
}

/*

# setTimeout
-> The setTimeout function is used to execute a specified function or a piece of code once after a specified delay in milliseconds.

-> It allows you to introduce delays in your code, making it useful for scenarios where you want to wait for some time before performing an action.

# setTimeout Use Cases:

-> Delayed execution of code.
-> Implementing timeouts for asynchronous operations.
-> Creating a delay before showing a notification or a modal.

*/

setTimeout(greet,5000);


/*

# setInterval

The setInterval function is used to repeatedly execute a function or a piece of code at fixed time intervals.
It's often used for creating animations, updating live data, or performing periodic tasks.

# setInterval Use Cases:

Periodic updates of data on a web page.
Creating animations or slideshows by updating the display at regular intervals.
Implementing features like auto-refresh for live data.

*/ 

setInterval(greeting,1000);

