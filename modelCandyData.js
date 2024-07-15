const modelCandyData = [
    {
        name: "Chocolate Bar",
        img: "images/chocolate-candy 1.png",
        maxQuanity: 10,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 2.50
    },
    {
        name: "Gummy Worms",
        img: "images/gummy_worms.png",
        maxQuanity: 20,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 3.00
    },
    {
        name: "Lollipop",
        img: "images/lollipop_candy.png",
        maxQuanity: 15,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 1.00
    },
    {
        name: "Candy Corn",
        img: "images/Candy_corn.png",
        maxQuanity: 30,
        unitOfMeasurement: "oz",
        type: "Seasonal",
        price: 2.00
    },
    {
        name: "Jawbreakers",
        img: "images/jaw_breakers.png",
        maxQuanity: 5,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 1.50
    },
    {
        name: "Licorice Twists",
        img: "images/licorice_twists.png",
        maxQuanity: 25,
        unitOfMeasurement: "oz",
        type: "Licorice",
        price: 2.50
    },
    {
        name: "Gum Balls",
        img: "images/bubblegum_candy.png",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Gum",
        price: 0.10
    },
    {
        name: "Peppermint Patties",
        img: "images/peppermint_candy.png",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 1.20
    },
    {
        name: "Fruit Chews",
        img: "images/fruit_chews.png",
        maxQuanity: 35,
        unitOfMeasurement: "oz",
        type: "Chewy",
        price: 2.80
    },
    {
        name: "Sour Belts",
        img: "images/sour_belts.png",
        maxQuanity: 45,
        unitOfMeasurement: "oz",
        type: "Sour",
        price: 3.50
    },
    {
        name: "Marshmallow",
        img: "images/marshmellow_candy.png",
        maxQuanity: 60,
        unitOfMeasurement: "oz",
        type: "Soft Candy",
        price: 1.80
    },
    {
        name: "Butterscotch Discs",
        img: "images/butterscotch_candy.png",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 2.00
    },
    {
        name: "Caramel Squares",
        img: "images/caramel candy 1.png",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Caramel",
        price: 2.30
    },
    {
        name: "Bubble Gum",
        img: "images/bubblegum_candy.png",
        maxQuanity: 70,
        unitOfMeasurement: "pcs",
        type: "Gum",
        price: 0.10
    },
    {
        name: "Chocolate Truffles",
        img: "images/truffle_candy.png",
        maxQuanity: 20,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 3.00
    },
    {
        name: "Dark Chocolate",
        img: "images/dark_chocolate.png",
        maxQuanity: 25,
        unitOfMeasurement: "bars",
        type: "Chocolate",
        price: 2.50
    },
    {
        name: "Peanut Butter Cups",
        img: "images/peanutbutter_candy.png",
        maxQuanity: 30,
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 1.80
    },
    {
        name: "Gummy Bears",
        img: "images/gummy_bears.png",
        maxQuanity: 50,
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.50
    },
    {
        name: "Rock Candy",
        img: "images/rock_candy.png",
        maxQuanity: 20,
        unitOfMeasurement: "sticks",
        type: "Hard Candy",
        price: 3.00
    },
    {
        name: "Taffy",
        img: "images/taffy_candy.png",
        maxQuanity: 50,
        unitOfMeasurement: "pcs",
        type: "Chewy",
        price: 2.00
    },
    {
        name: "Candy Canes",
        img: "images/candy_cane.png",
        maxQuanity: 40,
        unitOfMeasurement: "pcs",
        type: "Seasonal",
        price: 1.50
    },
    {
        name: "Toffee",
        img: "images/toffee_candy.png",
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
        img: "images/cotton-candy 1.png",
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