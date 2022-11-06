// Stripe price ID's
// jordan 1 = price_1Lz2OiEbjHkiHv8ElqOh0lfE
// nike blazer = price_1Lz2PUEbjHkiHv8EmYHtGdpD
// nike dunk = price_1Lz2QDEbjHkiHv8E3QJsagG2
const productsArray = [
    {
            id: "price_1Lz2OiEbjHkiHv8ElqOh0lfE",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-708585Jcx0a_im9Xu-51jg4NeHc_ktFAE1XWDMT6stzs8KvgO0YY6mjN51MIorzOaA&usqp=CAU",
            name: "Jordan 1",
            price: 1000.00,
            desc: "First released in 1985, the Jordan 1 is not just a shoe. Dare to be like Mike?",
        },
        {
            id: "price_1Lz2PUEbjHkiHv8EmYHtGdpD",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokCHMYr4wJNc7OmMf04nn-O15nnjW-mU-tg&usqp=CAU",
            name: "Nike Blazer",
            price: 200.00,
            desc: "Up your shoe game with one of the cleanest Blazer colorways ever made.",
        },
        {
            id: "price_1Lz2QDEbjHkiHv8E3QJsagG2",
            image: "https://cdn.luxe.digital/media/20220215124036/best-men-sneakers-nike-dunk-high-retro-shoe-luxe-digital-780x520.jpg.webp",
            name: "Nike Dunk High Retro",
            price: 450.00,
            desc: "Utilizing the 80's vintage look, the Nike Dunk High Retro is nothing but comfort.",
    }
]

function getProductData(id) {
    let productData = productsArray.find( product => product.id === id );

    if(productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}
export {  productsArray, getProductData};