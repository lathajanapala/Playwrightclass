// let number = [23,45,67,13,24,10,28,68,45,89];
function secondLargest(arr:number[]):number|null{
    if(arr.length<2) return null;
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(const num of arr){
        if(num>largest){
            secondLargest = largest;
            largest =num
        }else if (num>secondLargest && num!==largest){
            secondLargest=num
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}
console.log(secondLargest([23,45,67,13,24,10,28,68,45,89]));
