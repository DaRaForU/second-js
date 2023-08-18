import { products } from "../data/products.js";
import { cart, addProductToCart } from "../data/cart.js";

let choosenProduct = products[0];


let productSuammryHTML = '';
products.forEach((product) => {
    productSuammryHTML += 
    `
        <div class="card">
        <div class="imgBx">
            <img class="img-product js-img-product" src="${product.colors[0].img}" alt="nike-air-shoe">
        </div>

        <div class="contentBx">

            <h2>Nike Shoes</h2>

            <div class="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>

            <div class="color">

                <h3>Color :</h3>
                <span class="js-color" data-product-id="${product.id}"></span>
                <span class="js-color" data-product-id="${product.id}"></span>
            </div>

            <div class="price">
                <p>$${product.price}</p>
            </div>
            
            <button class="buy-now js-buy-now" data-product-id=${product.id}>Buy Now</button>
        </div>

    </div>
    `
    ;



});

document.querySelector('.js-container').innerHTML = productSuammryHTML;




document.querySelectorAll('.js-buy-now')
    .forEach((btnBuy) => {
        btnBuy.addEventListener('click', () => {
            const productId = btnBuy.dataset.productId;

            window.location.href = 'payment.html';
   
            addProductToCart(productId);

        });
    });





