
let arrow_btn = document.getElementsByClassName('arrow_btn');
let productsContainer = document.getElementById('products-container');
let products = document.getElementsByClassName('product');
let productPage = Math.ceil(products.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 127;

// Mobile view adjustment
let mobView = window.matchMedia("(max-width: 768px)");
if (mobView.matches) {
    movePer = 50.36;
    maxMove = 558;
}

let rightMover = () => {
    l += movePer;
    if (l > maxMove) {
        l = 0;

    }
    for (const i of products) {
        i.style.left = '-' + l + '%';
    }
}

let leftMover = () => {
    l -= movePer;
    if (l < 0) {
        l = maxMove;
    }
    for (const i of products) {
        i.style.left = '-' + l + '%';
    }
}

// Add event listeners for arrow buttons
arrow_btn[1].onclick = () => { rightMover(); }
arrow_btn[0].onclick = () => { leftMover(); }

// Automatic sliding
let autoSlide = setInterval(rightMover, 3000);

// Pause on hover
productsContainer.addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});
productsContainer.addEventListener('mouseout', () => {
    autoSlide = setInterval(rightMover, 3000);
});