const cat = require("cat-me");
const faker = require("faker");

for(let i = 0; i < 10; i++)
{
    console.log(`${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()} - $${faker.commerce.price()}`);
}
// console.log(cat("resting"));