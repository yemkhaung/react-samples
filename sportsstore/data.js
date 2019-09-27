var faker = require("faker");

var data = [];

var categories = ["Watersports", "Soccer", "Chess", "Running"];

faker.seed(100);

for (var i = 1; i <= 503; i++) {
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(10)}`,
        price: Number(faker.commerce.price())
    });
}

module.exports = function() {
    return {
        categories: categories,
        products: data,
        order: []
    };
};
