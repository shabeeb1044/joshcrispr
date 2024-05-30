const product = require('./productsData.js') ;

console.log(product);

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const productId = getQueryParam('id');
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-sizes').textContent = `Sizes: ${product.sizes}`;
    } else {
        document.getElementById('product-name').textContent = 'Product not found';
    }
});
