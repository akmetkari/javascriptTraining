//write a program to search all occurance of "java" word and print their indexes
let str: string = "java is a programming language. java is used for web development mobile applications, and more";

let count:number = 0;
let indexs:number[] = [];
let searchString: string = "java";
let wordIndex: number = 0;

for(let word of str.split(" "))
{
    let newWord = word.toLowerCase();
    console.log(newWord);
    if(newWord==searchString)
    {
        count++; 
        indexs.push(wordIndex);
    }
    wordIndex++;
}

console.log(`java occured ${count} times`);
for(let index of indexs)
{
    console.log(index);
}   