//Making Add to cart functional

const cartBt=document.getElementById('cart-btn');
const addToCartBtns=document.querySelectorAll('.add-to-cart')

let cart=[];

addToCartBtns.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        cart.push(`Item ${index + 1}`);
        alert('Added to cart! Total items:${cart.lengh}');
    });
});
addToCartBtns.addEventListener('click',()=>{
    alert(`Your cart: ${cart.join(', ') || 'is empty'}`);
}); 
