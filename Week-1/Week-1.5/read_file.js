
// use require() function to improt files or library.
const fs = require("fs");


// file_name.exetention,encoding,function(error_mess,data)
fs.readFile("callback_hell.txt","utf-8",function(err,data){
    console.log(data);
});

console.log("this is print first because, readFile()  is async function");