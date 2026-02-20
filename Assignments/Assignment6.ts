//Program to print true if given number is prime else false
let num:number = 1;

let result:boolean = false;

let count = 0;
for(let i=2;i<=num;i++)
{
    if(num % i == 0)
    {
        count++;
    }
}

if(count == 1)
{
    result = true;
}
else 
    result = false;

console.log(`Number prime condition is ${result}`)