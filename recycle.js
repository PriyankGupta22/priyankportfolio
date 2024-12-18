document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const productCount = document.getElementById('product-count');
    productCount.textContent = products.length;
});
