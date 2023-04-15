
// start cart

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    console.log(title,price,productImg)
}

let cartIcon = document.getElementById('carta');
let cart = document.querySelector('.cart');
let close = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.toggle("active");
};
close.onclick = () => {
    cart.classList.remove("active");
};

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}
function ready(){
    var removeCartBut = document.getElementsByClassName('cart-remove');
    console.log(removeCartBut)
    for (var i = 0; i < removeCartBut.length ; i++){
        var button = removeCartBut[i];
        button.addEventListener("click", removeCartItem);
    }
    var addcart = document.getElementsByClassName("add-cart")
    for(var i = 0; i < addcart.length; i++){
        var button = addcart[i];
        button.addEventListener("click", addCartClicked)
    }
}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    console.log(cartItems)
    var cartItemsNames =cartItems.getElementsByClassName("product-title");
    console.log(cartItemsNames)
    for(var i = 0 ; i < cartItemsNames.length; i++){
        console.log(cartItemsNames[i].innerText)
        if(cartItemsNames[i].innerText == title){
            alert("you have already add this item to cart");
            return;
        }
    }
        var cartBoxContent = `
                            <img src="${productImg}"  alt="" class="cart-img">
                            <div class="detail">
                                <div class="product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                            </div>
                            <i class="fa-solid fa-trash cart-remove"></i>`;
        cartShopBox.innerHTML = cartBoxContent
        cartItems.append(cartShopBox);
        cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click' , removeCartItem);
    }
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}
// end cart

// start wishlist

function addWishClicked(event){
    var buttonn = event.target;
    var shopProductss = buttonn.parentElement;
    var titlee = shopProductss.getElementsByClassName("product-title")[0].innerText;
    var pricee = shopProductss.getElementsByClassName("price")[0].innerText;
    var productImgg = shopProductss.getElementsByClassName("product-img")[0].src;
    addProductToWish(titlee,pricee,productImgg);
    console.log(titlee,pricee,productImgg)
}

let wishIcon = document.getElementById('wisha');
let wish = document.querySelector('.wish');
let closee = document.querySelector('#close-wish');

wishIcon.onclick = () => {
    wish.classList.toggle("active");
};
closee.onclick = () => {
    wish.classList.remove("active");
};

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', readyy);
}else{
    readyy();
}

function readyy(){
    var removeWishBut = document.getElementsByClassName('wish-remove');
    console.log(removeWishBut)
    for (var i = 0; i < removeWishBut.length ; i++){
        var buttonn = removeWishBut[i];
        buttonn.addEventListener("click", removeWishItem);
    }
    var addwish = document.getElementsByClassName("wishlist")
    for(var i = 0; i < addwish.length; i++){
        var button = addwish[i];
        button.addEventListener("click", addWishClicked)
    }
}

function addProductToWish(titlee,pricee,productImgg){
    var wishShopBox = document.createElement("div");
    wishShopBox.classList.add("wish-box");
    var wishItems = document.getElementsByClassName("wish-content")[0];
    console.log(wishItems)
    var wishItemsNames =wishItems.getElementsByClassName("product-title");
    console.log(wishItemsNames)
    for(var i = 0 ; i < wishItemsNames.length; i++){
        console.log(wishItemsNames[i].innerText)
        if(wishItemsNames[i].innerText == titlee){
            alert("you have already add this item to wishlist");
            return;
        }
    }
        var wishBoxContent = `
        <img src="${productImgg}" class="wish-img" alt="">
        <div class="wish-detail">
            <div class="product-title">${titlee}</div>
            <div class="wish-price">${pricee}</div>
        </div>
        <i class="fa-solid fa-trash wish-remove"></i>`

        wishShopBox.innerHTML = wishBoxContent
        wishItems.append(wishShopBox);
        wishShopBox
        .getElementsByClassName('wish-remove')[0]
        .addEventListener('click' , removeWishItem);
    }
function removeWishItem(event){
    var buttonClickedd = event.target;
    buttonClickedd.parentElement.remove();
}

// start color
let root = document.querySelector(':root');
let gcs = getComputedStyle(root);
let mainColor = gcs.getPropertyValue('--main-color');
let lis = document.querySelectorAll('.color1 li');
let exp = document.querySelector(':root');
console.log(exp)
if (window.localStorage.getItem("color")) {
    root.style.setProperty('--main-color' , window.localStorage.getItem("color"))
    console.log("yes")
}
lis.forEach((li) =>{
    li.addEventListener("click", (e) =>{
        console.log(e.currentTarget.dataset.color); 
        window.localStorage.setItem('color' , e.currentTarget.dataset.color);
        mainColor = e.currentTarget.dataset.color ;
        root.style.setProperty('--main-color' , e.currentTarget.dataset.color)
    })
})
// end color


// start toggle menu
let toggleB = document.querySelector(".toggle-menu");
let tlink = document.querySelector(".lin");
let lik = document.querySelectorAll(".main li a")
if(tlink.classList.contains("open")){
    tlink.classList.toggle("open")
 }
toggleB.onclick = function(){
    tlink.classList.toggle('open')
}
document.addEventListener('click',(e)=>{
    if(e.target !== toggleB && e.target !== tlink){
        if(tlink.classList.contains("open")){
            tlink.classList.toggle("open")
        }
    }
})

// end toggle menu