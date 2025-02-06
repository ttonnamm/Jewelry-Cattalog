// const products = [
//     {
//         id: 1, //ProductItem line-> 10 | ProductDetail line-> 6, 7
//         name: "Sakuma", //ProductItem line-> 12,14 | ProductDetail line-> 16,18
//         type: "A", //ProductItem line-> 10
//         material: "silver", //ProductItem line-> 10
//         image: "Sakuma.png", //ProductItem line-> 12 | ProductDetail line-> 16
//         price: "21,000", //ProductItem line-> 15 | ProductDetail line-> 19
//         detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools" // ProductDetail line-> 20
//     },
//     {
//         id: 2,
//         name: "Test",
//         type: "B",
//         material: "gold",
//         image: "testimg.jpg",
//         price: "32,000",
//         detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools"
//     },
//     {
//         id: 3,
//         name: "Cat",
//         type: "C",
//         material: "gold",
//         image: "kitty.jpg",
//         price: "52,000",
//         detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools"
//     },
//     {
//         id: 4, //ProductItem line-> 10 | ProductDetail line-> 6, 7
//         name: "Sakuma", //ProductItem line-> 12,14 | ProductDetail line-> 16,18
//         type: "A", //ProductItem line-> 10
//         material: "gold", //ProductItem line-> 10
//         image: "Sakuma.png", //ProductItem line-> 12 | ProductDetail line-> 16
//         price: "21,000", //ProductItem line-> 15 | ProductDetail line-> 19
//         detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools" // ProductDetail line-> 20
//     },
//     {
//         id: 5,
//         name: "Freshy",
//         type: "B",
//         material: "gold",
//         image: "testimg.jpg",
//         price: "32,000",
//         detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools"
//     },
//     {
//         id: 6,
//         name: "Tonnam",
//         type: "D",
//         material: "silver",
//         image: "kitty.jpg",
//         price: "52,000",
//         detail: "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools"
//     }
// ];

const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
    }
    catch (error) {
        console.error('Error fetching products', error);
        return [];
    }
};

export default products;
