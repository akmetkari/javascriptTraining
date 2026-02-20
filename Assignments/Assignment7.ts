let sentence:string = "Java programming is fun and challenging";
let count:number =0;

let newStrings:string[] = sentence.split(" ");
let reversedString:string = "";
for(let length=newStrings.length-1;length>=0;length--)
{
    count = count +1;
    reversedString += newStrings[length] + " ";
}
let capitalizedWord:string = "";
for(let word of newStrings)
{   
    capitalizedWord += word.charAt(0).toUpperCase() + word.slice(1) + " ";
   
}    


console.log(`Count of words ${count}`);
console.log(`Reversed string: ${reversedString}`);
console.log(`Capitalized string: ${capitalizedWord}`);