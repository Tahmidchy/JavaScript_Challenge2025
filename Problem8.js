/*
TODO: Problem-8: Create a product review data for an ecommerce website, where each review object will contain the product name, reviewer details (name, email), rating, and review text. Then convert that object to JSON .stringify, and then convert that JSON back to a JavaScript array.
*/

// Solution:

const productReviews = [
    {
        productName: 'Wireless Headphones',
        reviewerDetails: {
            name: 'Alice Johnson',
            email: 'xxx@email.com',
            rating: 4.5,
            reviewText: 'Great sound quality and comfortable to wear for long periods.'
        },
    },
    {
        productName: 'Smartphone Case',
        reviewerDetails: {
            name: 'Bob Smith',
            email: ' yyyy@email.com',
            rating: 4.0,
            reviewText: 'Durable and fits perfectly. Provides good protection.'
        },
    }

]
const productReviewsJSON = JSON.stringify(productReviews);
console.log(productReviewsJSON);