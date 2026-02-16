let names:string[] = ["suresh", "mahesh", "ramesh" ];
let marks:number[] = [75, 80, 82];

let newMarks:number[] = [];

for(let i=0;i<marks.length;i++)
{
    newMarks[i] = marks[i] + 10;
}

let sum = 0;
for(let newMark of newMarks)
{
    console.log(newMark);
    sum = sum + newMark;
}

console.log(`Averge  marks are ${sum/newMarks.length}`)