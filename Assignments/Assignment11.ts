let sentence:string = "Java programming is fun and challenging";
let count:number =0;

let newStrings:string[] = sentence.split(" ");
for(let word of newStrings)
{
    count = count +1;
    console.log(word);
}

console.log(`Count of words ${count}`);
