
const fs = require("fs");
const { resolve } = require("path");

function readFromFile(){
    console.log("inside readFromFile");
    /*
        the resolve function is called when the asynchronous operation inside the Promise completes successfully. The data passed to resolve is then accessible in the .then block, where we print it to the console.
    */
    //promises avoid  call back hell.
    //promises is clear way to wright async functions your own and reduce call back hell.
        return new Promise(function(resolve){
        console.log("inside promise");
        //async operation
        fs.readFile("read.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);
            
        });

    
    });
    
}
function onDone(data){
    console.log(data);
}

console.log("start");
 readFromFile().then(onDone);
let ans = readFromFile();
ans.then(onDone);
console.log("end");