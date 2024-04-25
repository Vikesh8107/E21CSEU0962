const axios = require('axios');

async function getTopProducts(companyName, categoryName, topN, minPrice, maxPrice) {
    try {
        const response = await axios.get(`http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q`);
        const products = response.data;
        products.forEach(product => {
            console.log("Product Name:", product.productName);
            console.log("Price:", product.price);
            console.log("Rating:", product.rating);
            console.log("Discount:", product.discount);
            console.log("Availability:", product.availability);
            console.log();
        });
    } catch (error) {
        console.error("Failed to fetch products:", error.message);
    }
}

// Example usage:
getTopProducts("AMZ", "Laptop", 10, 1, 10000);
