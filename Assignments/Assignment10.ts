//code to maximise proft

let prices = [7,6,4,3,1];

let maximisedProfit = 0;

for(let i=0;i<prices.length-1;i++)
{
    for(let j=i;j<prices.length;j++)
    {
        if(prices[j] - prices[i] > maximisedProfit)
        {
            maximisedProfit = prices[j] - prices[i];
        }
    }
}

console.log("maximum profit is "+maximisedProfit)