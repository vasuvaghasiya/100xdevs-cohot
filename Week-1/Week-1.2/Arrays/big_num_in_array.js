const arr = [1,3,7,9,10,45,89];

let max = 0;

for (let i=0; i<arr.length; i++){
    if(arr[i]>max)
    {
        max = arr[i];
    }
}
console.log(max);