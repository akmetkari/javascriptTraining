const empData: Map<string, number[]> = new Map();
empData.set("Alice Johnson", [75000, 5.1, 4.2]);
empData.set("Bob Smith", [68000, 3.2, 3.8]);
empData.set("Carol Davis", [82000, 7.1, 4.5]);
empData.set("David Brown", [90000, 10.2, 2.5]);
empData.set("Eva Green", [60000, 2.4, 3.5]);

// Map to store final results: [EmployeeName, HikePercentage]
const hikeResults: Map<string, number> = new Map();

for (let [name, data] of empData) {
    const baseSalary = data[0];
    const experience = data[1];
    const rating = data[2];

    let bonus = 0;
    let variablePayPercent = 0;
    let reward = 0;

    // 1. Calculate Reward based on Experience
    if (experience >= 5) {
        reward = 5000;
    }

    // 2. Calculate Variable Pay and Bonus based on Rating
    if (rating >= 4.0) {
        variablePayPercent = 15.0;
        bonus = 1500;
    } else if (rating >= 3.0) {
        variablePayPercent = 10.0;
        bonus = 1200;
    } else {
        variablePayPercent = 3.0;
        bonus = 300;
    }

    // 3. Hike Calculations
    const hikeAmount = (baseSalary * (variablePayPercent / 100)) + bonus + reward;
    const hikePercentage = (hikeAmount / baseSalary) * 100;

    // Store in the new Map
    hikeResults.set(name, Number(hikePercentage.toFixed(2)));

    console.log(`Employee: ${name}`);
    console.log(`- Hike Amount: ${hikeAmount.toLocaleString()}`);
    console.log(`- Hike Percentage: ${hikePercentage.toFixed(2)}%`);
    console.log('-------------------');
}

// Final Print of the Hike Results Map
console.log("Final Hike Percentages:", hikeResults);