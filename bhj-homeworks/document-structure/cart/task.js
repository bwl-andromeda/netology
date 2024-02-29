document.addEventListener('DOMContentLoaded', function() {
    let productsContainer = document.querySelector('.products');
    let cartProducts = document.querySelector('.cart__products');

    productsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('product__quantity-control')) {
            let product = event.target.closest('.product');
            let htmlCount = product.querySelector('.product__quantity-value');
            let count = parseInt(htmlCount.textContent);

            if (event.target.classList.contains('product__quantity-control_dec')) {
                count = Math.max(1, count - 1);
            } else if (event.target.classList.contains('product__quantity-control_inc')) {
                count++;
            }

            htmlCount.textContent = count;
        }
    });

    productsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('product__add')) {
            let product = event.target.closest('.product');
            let id = product.getAttribute('data-id');
            let image = product.querySelector('.product__image').src;
            let count = parseInt(product.querySelector('.product__quantity-value').textContent);

            let cartProduct = Array.from(cartProducts.children).find(item => item.getAttribute('data-id') === id);

            if (cartProduct) {
                let cartProductCount = cartProduct.querySelector('.cart__product-count');
                let newCount = parseInt(cartProductCount.textContent) + count;
                cartProductCount.textContent = newCount;
            } else {
                let newCartProduct = document.createElement('div');
                newCartProduct.classList.add('cart__product');
                newCartProduct.setAttribute('data-id', id);
                newCartProduct.innerHTML = `
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${count}</div>
                    <button class="cart__product-remove">Удалить</button>
                `;
                cartProducts.appendChild(newCartProduct);
            }
        }
    });

    cartProducts.addEventListener('click', function(event) {
        if (event.target.classList.contains('cart__product-remove')) {
            let cartProduct = event.target.closest('.cart__product');
            cartProducts.removeChild(cartProduct);
        }
    });
});

