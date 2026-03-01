//Palindrome checker

function checkPalindrome(Str:string):boolean
{

    const cleanedstr:string = Str.toLowerCase().replace(/[^a-z0-9]/g,"");;
   let left:number = 0;
    let right:number = cleanedstr.length - 1;
    while(left < right)
    {    if(cleanedstr[left] !== cleanedstr[right])
        {
            return false;
        }     left++;
        right--;    
    }       return true;

}

let inputString:string = "race a car";

let result:boolean = checkPalindrome(inputString);
console.log(result);