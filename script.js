// Storing data in Local Storage
let products = [
    {
    name: "Mobile",
    price: 10000,
    quantity: 50
},
{
    name: "Laptop",
    price: 50000,
    quantity: 10
}
];
localStorage.setItem('products', JSON.stringify(products));

// Retrieving data from Local Storage
localStorage.getItem('products');


let productData=JSON.parse(localStorage.getItem('products'));

console.log(productData);
