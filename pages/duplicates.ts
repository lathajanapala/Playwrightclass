function findDuplicatesInaString(input: string): string {
    let nonDuplicates = new Set<string>();
    let duplicates = new Set<string>();

    for (const char of input) {
        if(char ===" ") continue;
        if (nonDuplicates.has(char)) {
            duplicates.add(char);

        } else {
            nonDuplicates.add(char);

        }

    }
    console.log(duplicates.size)
    return Array.from(duplicates).join('');

}
console.log(findDuplicatesInaString("find a duplicate charachters in this sentence and seperate all duplicates"))