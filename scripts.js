document.addEventListener('DOMContentLoaded', function() {
    

const products=[
    {id:1,name:"Product 1", price:28.99},
    {id:2,name:"Product 2",price:33.99},
    {id:3,name:"Product 3", price:45.99},
]



const cart=[];

const productList=document.getElementById("product-list");
const cartItems=document.getElementById("cart-items");
const emptyCartMessage= document.getElementById("empty-cart");
const cartTotalMessage=document.getElementById("cart-total");
const totalPriceDisplay=document.getElementById("total-price");
const checkOutBtn=document.getElementById("checkout-btn");
  



products.forEach(product => {
     const productDiv=   document.createElement('li');
 productDiv.classList.add('product');
        productDiv.innerHTML=`
    <span> ${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
    
        `;

productList.appendChild(productDiv);


});


productList.addEventListener('click',function(e){
    if(e.target.tagName==='BUTTON'){
    
       const productId= parseInt(e.target.getAttribute('data-id'));
  const product=      products.find(product => product.id===productId);
addToCart(product);




    }


});

function addToCart(product){
    cart.push(product);
    renderCart();
}

function renderCart(){
    cartItems.innerText="";
    let totalPrice=0;

    if(cart.length>0){
//means it means something is in the cart
emptyCartMessage.classList.add('hidden');
cartTotalMessage.classList.remove('hidden');
cart.forEach((item,index) =>{
    totalPrice +=item.price;
    const cardItem=document.createElement('div');
    cardItem.innerHTML=`
    ${item.name} - $${item.price.toFixed(2)}`
    cartItems.appendChild(cardItem);
    totalPriceDisplay.innerText=`$${totalPrice.toFixed(2)}`;
   })
   


}else{
emptyCartMessage.classList.remove('hidden');
totalPriceDisplay.innerText="$0.00";
    }

}


checkOutBtn.addEventListener('click',function(){
    alert("Thank you for your purchase!");
    cart.length=0;
    renderCart();








})
    
    
    
    
    
    
    }   );