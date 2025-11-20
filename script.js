setTimeout(function() {
        document.getElementById('intro-screen').style.display = 'none';
            document.querySelector('.next-logo').style.display = 'flex';
            
            setTimeout(function() {
                window.location.href = "home.html";
            }, 500);
        }, 500);


// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
});

// Isara ang mobile menu kapag pinindot ang link
document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
        });
});

// Header scroll effect - nagbabago ang itsura ng header kapag nag-scroll
window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
                header.classList.add('scrolled');
        } else {
                header.classList.remove('scrolled');
        }
});

// Modal Functionality - para sa login, register, at contact forms
const userIcon = document.querySelector('.user-icon');
const loginModal = document.querySelector('.login-modal');
const registerModal = document.querySelector('.register-modal');
const contactModal = document.querySelector('.contact-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const showRegisterLink = document.querySelector('.show-register');
const showLoginLink = document.querySelector('.show-login');
const contactBtn = document.querySelector('.contact-btn');

// Buksan ang login modal kapag pinindot ang user icon
userIcon.addEventListener('click', () => {
        loginModal.classList.add('active');
});

// Buksan ang contact modal kapag pinindot ang "Send Us a Message" button
contactBtn.addEventListener('click', () => {
        contactModal.classList.add('active');
});

// Isara ang mga modal
closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                loginModal.classList.remove('active');
                registerModal.classList.remove('active');
                contactModal.classList.remove('active');
        });
});

// Paglipat sa between ng login at register modals
showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('active');
        registerModal.classList.add('active');
});

showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.classList.remove('active');
        loginModal.classList.add('active');
});

// Isara ang modal kapag pinindot sa labas nito
window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
                loginModal.classList.remove('active');
        }
        if (e.target === registerModal) {
                registerModal.classList.remove('active');
        }
        if (e.target === contactModal) {
                contactModal.classList.remove('active');
        }
});

// Pag-submit ng login form
document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Welcome back! You have successfully logged in to Master Baker.');
        loginModal.classList.remove('active');
});

// Pag-submit ng register form
document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Welcome! You have successfully registered with Master Baker.');
        registerModal.classList.remove('active');
});

// Cart Functionality - para sa shopping cart
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const totalPrice = document.querySelector('.total-price');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const buyNowButtons = document.querySelectorAll('.buy-now');

let cart = [];

// Buksan ang cart
cartIcon.addEventListener('click', () => {
        cartModal.classList.add('active');
        cartOverlay.classList.add('active');
});

// Isara ang cart
closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
        cartOverlay.classList.remove('active');
});

cartOverlay.addEventListener('click', () => {
        cartModal.classList.remove('active');
        cartOverlay.classList.remove('active');
});

// sa add to cart
addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
                const id = button.dataset.id;
                const name = button.dataset.name;
                const price = parseFloat(button.dataset.price);
                const image = button.dataset.image;
                
                // Tingnan kung nandito na ang item sa cart
                const existingItem = cart.find(item => item.id === id);
                
                if (existingItem) {
                        existingItem.quantity += 1;
                } else {
                        cart.push({
                                id,
                                name,
                                price,
                                image,
                                quantity: 1
                        });
                }
                updateCart();
                alert(`Successfully Added to Cart!`);
        });
});

// Sa pagbili (Buy Now)
buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
                const name = button.dataset.name;
                const price = parseFloat(button.dataset.price);
                alert(`Thankyou for your order, Have a nice day!`);
        });
});

// I-update ang cart
function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        let count = 0;
        
        cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                count += item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₱${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
                
                cartItems.appendChild(cartItem);
        });
        
        cartCount.textContent = count;
        totalPrice.textContent = `₱${total.toFixed(2)}`;
        
        // Magdagdag ng event listeners sa quantity buttons
        document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', () => {
                        const id = button.dataset.id;
                        const item = cart.find(item => item.id === id);
                        if (item.quantity > 1) {
                                item.quantity -= 1;
                        } else {
                                cart = cart.filter(item => item.id !== id);
                        }
                        updateCart();
                });
        });
        
        document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', () => {
                        const id = button.dataset.id;
                        const item = cart.find(item => item.id === id);
                        item.quantity += 1;
                        updateCart();
                });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', () => {
                        const id = button.dataset.id;
                        alert(`Successfully Removed to Cart!`);
                        cart = cart.filter(item => item.id !== id);
                        updateCart();
                });
        });
}

// Checkout button
document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
                alert('Your shopping cart is empty!');
        } else {
                alert('Thank you for your order! We are preparing your products and will be in touch with you for the next steps.');
                cart = [];
                updateCart();
                cartModal.classList.remove('active');
                cartOverlay.classList.remove('active');
        }
});

window.onscroll = function() {
        const backToTopIcon = document.getElementById("backToTop");
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
      {
          backToTopIcon.style.display = "block";  
      } else {
         backToTopIcon.style.display = "none"; 
      }
    };

     document.getElementById("backToTop").onclick = function() {
      window.scrollTo({
        top: 0,
       behavior: "smooth" 
     });
   };