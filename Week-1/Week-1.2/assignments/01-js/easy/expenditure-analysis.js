/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    // Create an empty array to store the result
    const result = [];

    // Iterate over each transaction in the input array
    transactions.forEach(transactions => {

        // Check if there is an existing category in the result array
        const existingCategory = result.find(item => item.category === transactions.category);

        // If the category already exists, update the totalSpent value
        if (existingCategory) {
            existingCategory.totalSpent += transactions.price;
        } else {
            // If the category does not exist, add a new object to the result array
            result.push({ category: transactions.category, totalSpent: transactions.price });
        }
    });

    // Return the final result array
    return result;
}

// Export the function for use in other files
module.exports = calculateTotalSpentByCategory;

// Example transactions array
const transactions = [
	{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
	{
		id: 2,
		timestamp: 1656259600000,
		price: 20,
		category: 'Food',
		itemName: 'Burger',
	},
	{
		id: 3,
		timestamp: 1656019200000,
		price: 15,
		category: 'Clothing',
		itemName: 'T-Shirt',
	},
	{
		id: 4,
		timestamp: 1656364800000,
		price: 30,
		category: 'Electronics',
		itemName: 'Headphones',
	},
	{
		id: 5,
		timestamp: 1656105600000,
		price: 25,
		category: 'Clothing',
		itemName: 'Jeans',
	},
];

// Call the calculateTotalSpentByCategory function with the transactions array
const result = calculateTotalSpentByCategory(transactions);

// Print the result to the console
console.log(result);
