let creditScore: number = 670;
let income: number = 30000;
let employmentStatus: boolean = true;
let debtToIncomeRatio: number = 35.0;

function eligibleForLoan(creditScore: number, income: number, employmentStatus: boolean, debtToIncomeRatio: number): string {
    if (creditScore >= 750) 
    {       
        return "Loan Approved";
    }   

    else if(creditScore > 650 )
    {    
        if(income> 50000)
        {
            
            if(employmentStatus == true)
            {
                if(debtToIncomeRatio < 40)
                {
                    return "Loan Approved";
                }
                else
                {
                    return "Loan Denied: Debt to Income Ratio is too high";
                }
            }
            else
            {
                return "Employment status is not stable, loan Denied";
            }
        }
        
        else
        {
            return "Loan Denied: Income is too low";
        }
        
    }
    else 
    {
        return "Loan Denied: Credit Score is too low";
    }       
}

let result: string = eligibleForLoan(creditScore, income, employmentStatus, debtToIncomeRatio);
console.log(result);
