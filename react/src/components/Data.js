const products = [
    {
        id: 1, //ProductItem line-> 10 | ProductDetail line-> 6, 7
        name: "Sakuma", //ProductItem line-> 12,14 | ProductDetail line-> 16,18
        type: "A", //ProductItem line-> 10 
        material: "silver", //ProductItem line-> 10
        image: "images/Sakuma.png", //ProductItem line-> 12 | ProductDetail line-> 16
        price: "21,000", //ProductItem line-> 15 | ProductDetail line-> 19
        detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools" // ProductDetail line-> 20
    },
    {
        id: 2,
        name: "Test",
        type: "B",
        material: "gold",
        image: "images/testimg.jpg",
        price: "32,000",
        detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools"
    }
];

export default products;
