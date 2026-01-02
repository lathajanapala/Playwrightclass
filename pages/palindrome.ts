let strpalindrome = "madamt";
let reversedStr ="";
for(let i=strpalindrome.length-1; i>=0; i--){
    reversedStr +=strpalindrome[i];

}
if(reversedStr===strpalindrome){
    console.log("given string is a palindrome")
} else {console.log("given string is not palindrome")}