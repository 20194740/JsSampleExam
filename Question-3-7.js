function reverse(arr){
arr = [1, 2, 3, 4];
arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
return arr1;
}
let arr=[1,2,3,4]
console.log(reverse(arr));
//Output: [4, 3, 2, 1]