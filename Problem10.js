/*
TODO: Problem-10: Write a function that takes an income amount as a parameter and returns it after a tax bracket. If the income is <= 50000, it will return 10. If the income is between 50001 and 100000, it will return 20. If the income is between 100001 and 200000, it will return 30. If the income is above 200001, it will return 40. Not need (%) sign in the return value.
*/

// Solution: 

function TaxBracket(income) {
    if (income <= 50000) {
        return 10;
    } else if (income <= 100000) {
        return 20;
    } else if (income <= 200000) {
        return 30;
    } else {
        return 40;
    }
};
// Testing the function with different income values
console.log(TaxBracket(45000));  // Output: 10
console.log(TaxBracket(75000));  // Output: 20
console.log(TaxBracket(150000)); // Output: 30
console.log(TaxBracket(250000)); // Output: 40

// Additional test cases
console.log(TaxBracket(50000));  // Output: 10
console.log(TaxBracket(99999));  // Output: 20
console.log(TaxBracket(100000)); // Output: 20
console.log(TaxBracket(200000)); // Output: 30
console.log(TaxBracket(200001)); // Output: 40
console.log(TaxBracket(300000)); // Output: 40
console.log(TaxBracket(0));      // Output: 10
console.log(TaxBracket(-1000));  // Output: 10 (assuming negative income is treated as <= 50000)
console.log(TaxBracket(50001));  // Output: 20  
console.log(TaxBracket(100001)); // Output: 30
console.log(TaxBracket(2000000)); // Output: 40 (testing with a very high income)
console.log(TaxBracket(1000000)); // Output: 40 (testing with a very high income)
console.log(TaxBracket(1500000)); // Output: 40 (testing with a very high income)
console.log(TaxBracket(999999)); // Output: 40 (testing with a very high income)
console.log(TaxBracket(500000)); // Output: 40 (testing with a very high income)
console.log(TaxBracket(750000)); // Output: 40 (testing with a very high income)
console.log(TaxBracket(125000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(175000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(120000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(60000));  // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(80000));  // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(95000));  // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(110000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(130000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(180000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(220000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(30000));  // Output: 10 (testing with a low income)
console.log(TaxBracket(25000));  // Output: 10 (testing with a low income)
console.log(TaxBracket(10000));  // Output: 10 (testing with a low income)
console.log(TaxBracket(20000));  // Output: 10 (testing with a low income)
console.log(TaxBracket(30000));  // Output: 10 (testing with a low income)
console.log(TaxBracket(40000));  // Output: 10 (testing with a low income)
console.log(TaxBracket(60000));  // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(70000));  // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(80000));  // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(90000));  // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(100000)); // Output: 20 (testing with a mid-range income)
console.log(TaxBracket(110000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(120000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(130000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(140000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(150000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(160000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(170000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(180000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(190000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(200000)); // Output: 30 (testing with a mid-range income)
console.log(TaxBracket(210000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(220000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(230000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(240000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(250000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(260000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(270000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(280000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(290000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(300000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(350000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(400000)); // Output: 40 (testing with a high income)
console.log(TaxBracket(450000)); // Output: 40 (testing with a high income)