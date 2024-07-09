const modelCandyData = [
    {
        name: "Chocolate Bar",
        img: "[placeholder image]",
        maxQuanity: 10,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 2.50
    },
    {
        name: "Gummy Worms",
        img: "[placeholder image]",
        maxQuanity: 20,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 3.00
    },
    {
        name: "Lollipop",
        img: "[placeholder image]",
        maxQuanity: 15,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 1.00
    },
    {
        name: "Candy Corn",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "oz",
        type: "Seasonal",
        price: 2.00
    },
    {
        name: "Jawbreakers",
        img: "[placeholder image]",
        maxQuanity: 5,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 1.50
    },
    {
        name: "Licorice Twists",
        img: "[placeholder image]",
        maxQuanity: 25,
        unitOfMeasurement: "oz",
        type: "Licorice",
        price: 2.50
    },
    {
        name: "Gum Balls",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Gum",
        price: 0.10
    },
    {
        name: "Peppermint Patties",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 1.20
    },
    {
        name: "Fruit Chews",
        img: "[placeholder image]",
        maxQuanity: 35,
        unitOfMeasurement: "oz",
        type: "Chewy",
        price: 2.80
    },
    {
        name: "Sour Belts",
        img: "[placeholder image]",
        maxQuanity: 45,
        unitOfMeasurement: "oz",
        type: "Sour",
        price: 3.50
    },
    {
        name: "Marshmallow",
        img: "[placeholder image]",
        maxQuanity: 60,
        unitOfMeasurement: "oz",
        type: "Soft Candy",
        price: 1.80
    },
    {
        name: "Butterscotch Discs",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 2.00
    },
    {
        name: "Caramel Squares",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Caramel",
        price: 2.30
    },
    {
        name: "Bubble Gum",
        img: "[placeholder image]",
        maxQuanity: 70,
        unitOfMeasurement: "pcs",
        type: "Gum",
        price: 0.10
    },
    {
        name: "Chocolate Truffles",
        img: "[placeholder image]",
        maxQuanity: 20,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 3.00
    },
    {
        name: "Cotton Candy",
        img: "[placeholder image]",
        maxQuanity: 10,
        unitOfMeasurement: "bags",
        type: "Fluffy Candy",
        price: 4.00
    },
    {
        name: "Dark Chocolate",
        img: "[placeholder image]",
        maxQuanity: 25,
        unitOfMeasurement: "bars",
        type: "Chocolate",
        price: 2.50
    },
    {
        name: "Peanut Butter Cups",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 1.80
    },
    {
        name: "Gummy Bears",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.50
    },
    {
        name: "Rock Candy",
        img: "[placeholder image]",
        maxQuanity: 20,
        unitOfMeasurement: "sticks",
        type: "Hard Candy",
        price: 3.00
    },
    {
        name: "Taffy",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Chewy",
        price: 2.00
    },
    {
        name: "Candy Canes",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Seasonal",
        price: 1.50
    },
    {
        name: "Toffee",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 2.50
    },
    {
        name: "Milk Chocolate",
        img: "[placeholder image]",
        maxQuanity: 20,
        unitOfMeasurement: "bars",
        type: "Chocolate",
        price: 2.00
    },
    {
        name: "Gummy Rings",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.80
    },
    {
        name: "Caramel Popcorn",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "bags",
        type: "Popcorn",
        price: 3.50
    },
    {
        name: "Chocolate Covered Raisins",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "oz",
        type: "Chocolate",
        price: 2.80
    },
    {
        name: "Gummy Sharks",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 3.00
    },
    {
        name: "Caramel Chews",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Caramel",
        price: 2.00
    },
    {
        name: "Mint Candies",
        img: "[placeholder image]",
        maxQuanity: 60,
        unitOfMeasurement: "pcs",
        type: "Mint",
        price: 1.20
    },
    {
        name: "Cherry Sours",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Sour",
        price: 2.50
    },
    {
        name: "Chocolate Covered Almonds",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "oz",
        type: "Chocolate",
        price: 3.00
    },
    {
        name: "Butterscotch",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 2.00
    },
    {
        name: "Candy Necklaces",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "pcs",
        type: "Novelty",
        price: 1.50
    },
    {
        name: "Gummy Frogs",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.50
    },
    {
        name: "Chocolate Covered Pretzels",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "oz",
        type: "Chocolate",
        price: 3.00
    },
    {
        name: "Sour Patch Kids",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Sour",
        price: 2.80
    },
    {
        name: "Peanut Brittle",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "pcs",
        type: "Brittle",
        price: 2.50
    },
    {
        name: "Chocolate Covered Cherries",
        img: "[placeholder image]",
        maxQuanity: 20,
        unitOfMeasurement: "oz",
        type: "Chocolate",
        price: 3.50
    },
    {
        name: "Sour Balls",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Sour",
        price: 2.00
    },
    {
        name: "Gummy Dinosaurs",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.80
    },
    {
        name: "Chocolate Covered Espresso Beans",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "oz",
        type: "Chocolate",
        price: 3.50
    },
    {
        name: "Cotton Candy Pops",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Lollipop",
        price: 1.20
    },
    {
        name: "Fudge",
        img: "[placeholder image]",
        maxQuanity: 20,
        unitOfMeasurement: "lbs",
        type: "Chocolate",
        price: 4.00
    },
    {
        name: "Jelly Beans",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Jelly",
        price: 2.50
    },
    {
        name: "Root Beer Barrels",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 1.50
    },
    {
        name: "Sour Gummy Worms",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Sour",
        price: 2.80
    },
    {
        name: "Licorice Wheels",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Licorice",
        price: 2.00
    },
    {
        name: "Milk Caramels",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Caramel",
        price: 2.00
    },
    {
        name: "Tutti Frutti",
        img: "[placeholder image]",
        maxQuanity: 40,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.50
    },
    {
        name: "Peach Rings",
        img: "[placeholder image]",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.80
    },
    {
        name: "Marzipan",
        img: "[placeholder image]",
        maxQuanity: 30,
        unitOfMeasurement: "oz",
        type: "Nut Candy",
        price: 3.50
    }
];
