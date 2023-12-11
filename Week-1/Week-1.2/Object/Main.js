
//simple way to write objects.
// const person = {
//     firstName : "vasu",
//     age : 1,
//     gender : "male",
// };

//array of object

//[ { {} } ,{ } ,{ }]

const allUsers = [{         
    firstName : "vasu",
    gender : "male",
    //object inside another object
    metadata : {
        age:21,
        address:""
    }
},{
    firstName : "sneh",
    gender : "male"
},{
    firstName : "priya",
    gender : "female"
}]

//[ { }, { }, { }]

for (let i = 0; i < allUsers.length; i++) {
    if(allUsers[i]["gender"] === "male"){
        console.log(allUsers[i]["firstName"]);
    }
    
}
