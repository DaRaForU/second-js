export let cart;

export function addProductToCart(productId){

    cart = productId;

    localStorage.setItem('cart', JSON.stringify(cart));
    

}







