function findWordOccurenceCount(str: string):Record<string, number>{
    const result :Record<string,number> ={};
    const words = str.trim().toLowerCase().split(/\s/).filter(Boolean);
    console.log(words)
    console.log(words.length)
    for(const word of words){
        result[word]=(result[word] || 0)+1;
    }
    return result

}
console.log(findWordOccurenceCount("this is playwright test to test playwrightfunctions how it is working"))