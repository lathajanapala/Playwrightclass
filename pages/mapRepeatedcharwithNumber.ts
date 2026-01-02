function mapcharWithRepeatedTimes(str:string):string|null{
const countMap = new Map<string,number>();
for(const char of str){
    countMap.set(char,(countMap.get(char)||0)+1)
}
let result:string[] = [];
for (const [char, count] of countMap) {
 result.push(`${char}-->${count}`)
}
return result.join(',');
}
console.log(mapcharWithRepeatedTimes("pushpalatha"));
