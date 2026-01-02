function findDuplicatesInAnIntegerArray(arr:number[]):number[]{
    const uniqueNumbers = new Set<number>();
    const duplicates = new Set<number>();
    for(const num of arr){
        if(uniqueNumbers.has(num)){
          duplicates.add(num);
        } else {
            uniqueNumbers.add(num)
        }
    }
    return[...duplicates];
}
console.log(findDuplicatesInAnIntegerArray([23,45,67,13,24,10,28,68,45,89,23,13,]))