
function clock(){

const date = new Date();

const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();

console.log(`${h} : ${m} : ${s}`);

}


var s = setInterval(clock,1000);