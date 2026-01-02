function countConsonantsAndVowels(str: string){

    let vowels = 0;
    let consonants =0;
    const vowelsSet = new Set(['a','e','i','o','u']);
    for(const char of str.toLowerCase()){
        if(char >='a' && char <='z'){
        if(vowelsSet.has(char)){
            vowels++;
        }
        else{
            consonants++;
        }
    }
    }
    return{consonants,vowels}
}
console.log(countConsonantsAndVowels("please find vowels and consonants in this sentence"));
