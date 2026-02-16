let bankTransactions:number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditTransactions:number[] = [];
let debitTransactions:number[] = [];

let totalCreditAmount:number = 0;
let totalDebitAmount:number = 0;

let finalAmout: number = 0;

let suspiciousTransactions:number[] = [];

for(let transaction of bankTransactions)
{
   if(transaction > 0)
   {
       creditTransactions.push(transaction);
       totalCreditAmount += transaction;
   }
   else
   {
       debitTransactions.push(transaction);
       totalDebitAmount += transaction;
   
   }

   if(transaction > 10000 || transaction < -10000)
   {
       console.log("Suspicious Transaction: " + transaction);
       suspiciousTransactions.push(transaction);
   }    
}

console.log("Credit Transactions: " + creditTransactions.length);
console.log("Debit Transactions: " + debitTransactions.length);

console.log("Total Credit Amount: " + totalCreditAmount);
console.log("Total Debit Amount: " + totalDebitAmount);

finalAmout = totalCreditAmount + totalDebitAmount;
console.log("Final Amount: " + finalAmout);

console.log("Suspicious Transactions: " + suspiciousTransactions.length);
for(let transaction of suspiciousTransactions)
{    
    console.log(transaction);
}