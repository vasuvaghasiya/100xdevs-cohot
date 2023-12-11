const arr = [9,6,2,3,7];

//print in reverse.
// for (let i = arr.length; i>=0 ; i--) {
//     console.log(i);
// }

//  reverse num internally in array.

let left = 0;
let right = arr.length-1;
while(left<right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right]=temp;
    left++;
    right--;
}
console.log(arr);