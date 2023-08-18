import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

let matchingProduct;

console.log(typeof Number( eval(localStorage.getItem('cart'))));

products.forEach((product) => {
    if(Number(eval(localStorage.getItem('cart'))) === product.id){
        matchingProduct = product;
    }
});

console.log(typeof products[0].id)

console.log(matchingProduct);


let paymentCart = 
`
    <div class="card">
    <div class="leftside">
    <i class="fa-solid fa-arrow-left back js-back"></i>

    <img
        src="${matchingProduct.colors[0].img}"
        class="product"
        alt="Shoes"
    />
    </div>
    <div class="rightside">
    <form action="">
        <h1>CheckOut</h1>
        <h2>Payment Information</h2>
        <p>Cardholder Name</p>
        <input title="input" type="text" class="inputbox" name="name" required />
        <p>Card Number</p>
        <input title="input" type="number" class="inputbox" name="card_number" id="card_number" required />

        <p>Card Type</p>
        <select title="select" class="inputbox" name="card_type" id="card_type" required>
        <option value="">--Select a Card Type--</option>
        <option value="Visa">Visa</option>
        <option value="RuPay">RuPay</option>
        <option value="MasterCard">MasterCard</option>
        </select>
    <div class="expcvv">

        <p class="expcvv_text">Expiry</p>
        <input title="input" type="date" class="inputbox" name="exp_date" id="exp_date" required />

        <p class="expcvv_text2">CVV</p>
        <input title="input" type="password" class="inputbox" name="cvv" id="cvv" required />
    </div>
        <p></p>
        <button type="submit" class="button">CheckOut</button>
    </form>
    </div>
    </div>
`
;


document.querySelector('.js-mainscreen').innerHTML = paymentCart;
document.querySelector('.js-back').addEventListener('click', () => {
    window.location.href = 'index.html';
});