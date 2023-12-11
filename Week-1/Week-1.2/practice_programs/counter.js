var i=30;

function counter(){
    if(i==0){
        clearInterval(id);
    }
    console.log(i--);
    
}   

var id = setInterval(counter,1000);