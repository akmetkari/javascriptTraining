let creditScore: number = 670;
let income: number = 30000;
let employmentStatus: boolean = true;
let debtToIncomeRatio: number = 35.0;

function eligibleForLoan(creditScore: number, income: number, employmentStatus: boolean, debtToIncomeRatio: number): string {
    if (creditScore >= 750) 
    {       
        return "Loan Approved";
    }   

    else if(creditScore >= 650 && creditScore < 750)

    {    
        if (income >= 50000 && employmentStatus === true && debtToIncomeRatio < 40.0) 
        {
            return "Loan Approved"
        }
        else
        {
            return "Loan Denied";
        }
    }
    else 
    {
        return "Loan Denied";
    }       
}

let result: string = eligibleForLoan(creditScore, income, employmentStatus, debtToIncomeRatio);
console.log(result);

//sample input and output for above example

// Sample Input:    
// creditScore: 800
// income: 50000
// employmentStatus: true
// debtToIncomeRatio: 35.0

// Sample Output:
// Loan Approved