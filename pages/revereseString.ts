let str = "this is a string to reverse"
let strArray: any = str.split(" ")
let reversed = "";
for(let i = strArray.length - 1; i >= 0; i--){
    reversed += strArray[i] + " ";
}
console.log(reversed)