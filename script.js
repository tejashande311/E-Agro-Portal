// STORAGE KEYS
const STORAGE_USERS = 'eagro_users';
const STORAGE_CURRENT_USER = 'eagro_current_user';
const STORAGE_PRODUCTS = 'eagro_products';
const STORAGE_CART = 'eagro_cart';

// DEFAULT PRODUCT LIST (20 items as requested)
const DEFAULT_PRODUCTS = [
    { id: 1, name: "Potato", price: "₹20/kg", priceNum: 20, desc: "Staple tuber used in a wide variety of daily dishes.", image: "https://images.pexels.com/photos/30624993/pexels-photo-30624993.jpeg", origin: "India" },
    { id: 2, name: "Tomato", price: "₹30/kg", priceNum: 30, desc: "Highly demanded for sauces, salads, and curries.", image: "https://images.pexels.com/photos/34993617/pexels-photo-34993617.jpeg", origin: "India" },
    { id: 3, name: "Onion", price: "₹25/kg", priceNum: 25, desc: "A fundamental ingredient in almost all savory cooking.", image: "https://images.pexels.com/photos/13982568/pexels-photo-13982568.jpeg", origin: "India" },
    { id: 4, name: "Spinach (Palak)", price: "₹20/bunch", priceNum: 20, desc: "A leafy green packed with iron, commonly used for curries and soups.", image: "https://images.pexels.com/photos/19957370/pexels-photo-19957370.jpeg", origin: "India" },
    { id: 5, name: "Okra (Bhindi)", price: "₹40/kg", priceNum: 40, desc: "A popular green vegetable rich in soluble fiber.", image: "https://images.pexels.com/photos/33211276/pexels-photo-33211276.jpeg", origin: "India" },
    { id: 6, name: "Cauliflower", price: "₹35/kg", priceNum: 35, desc: "A versatile vegetable often used in curries and stir-fries.", image: "https://images.pexels.com/photos/28768714/pexels-photo-28768714.jpeg", origin: "India" },
    { id: 7, name: "Cabbage", price: "₹22/kg", priceNum: 22, desc: "A leafy, nutrient-dense cruciferous vegetable.", image: "https://images.pexels.com/photos/36771049/pexels-photo-36771049.jpeg", origin: "India" },
    { id: 8, name: "Carrot", price: "₹30/kg", priceNum: 30, desc: "Widely consumed raw in salads or cooked in various dishes.", image: "https://images.pexels.com/photos/34936603/pexels-photo-34936603.jpeg", origin: "India" },
    { id: 9, name: "Cucumber", price: "₹25/kg", priceNum: 25, desc: "Primarily eaten raw for hydration and in salads.", image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg", origin: "India" },
    { id: 10, name: "Brinjal (Baingan)", price: "₹28/kg", priceNum: 28, desc: "A common, versatile vegetable for curries and roasting.", image: "https://images.pexels.com/photos/34346365/pexels-photo-34346365.jpeg", origin: "India" },
    { id: 11, name: "Green Chili", price: "₹40/kg", priceNum: 40, desc: "A staple for adding heat to Indian cooking.", image: "https://images.pexels.com/photos/10899475/pexels-photo-10899475.jpeg", origin: "India" },
    { id: 12, name: "Garlic", price: "₹120/kg", priceNum: 120, desc: "A key aromatic used for flavoring almost all dishes.", image: "https://images.pexels.com/photos/25315388/pexels-photo-25315388.jpeg", origin: "India" },
    { id: 13, name: "Ginger", price: "₹90/kg", priceNum: 90, desc: "Used extensively daily as a seasoning and aromatic.", image: "https://images.pexels.com/photos/11369666/pexels-photo-11369666.jpeg", origin: "India" },
    { id: 14, name: "Green Peas", price: "₹50/kg", priceNum: 50, desc: "A popular starchy legume used in curries and rice dishes.", image: "https://images.pexels.com/photos/32188885/pexels-photo-32188885.jpeg", origin: "India" },
    { id: 15, name: "Bottle Gourd (Lauki)", price: "₹30/kg", priceNum: 30, desc: "A nutritious, hydrating vegetable popular in weight management diets.", image: "https://images.pexels.com/photos/11833021/pexels-photo-11833021.jpeg", origin: "India" },
    { id: 16, name: "Bell Pepper (Capsicum)", price: "₹60/kg", priceNum: 60, desc: "Frequently used for stir-fries, pizza topping, and salads.", image: "https://images.pexels.com/photos/10899481/pexels-photo-10899481.jpeg", origin: "India" },
    { id: 17, name: "Fenugreek Leaves (Methi)", price: "₹20/bunch", priceNum: 20, desc: "Commonly used for its flavorful, bitter taste in breads and dals.", image: "https://images.pexels.com/photos/9344827/pexels-photo-9344827.jpeg", origin: "India" },
    { id: 18, name: "Ridge Gourd (Tori)", price: "₹35/kg", priceNum: 35, desc: "A healthy vegetable frequently used in daily dals and curries.", image: "https://images.pexels.com/photos/35072410/pexels-photo-35072410.jpeg", origin: "India" },
    { id: 19, name: "Radish (Mooli)", price: "₹18/kg", priceNum: 18, desc: "Frequently used raw in salads or for making parathas.", image: "https://images.pexels.com/photos/7214603/pexels-photo-7214603.jpeg", origin: "India" },
    { id: 20, name: "French Beans", price: "₹45/kg", priceNum: 45, desc: "A common, high-fiber green bean used in stir-fries and salads.", image: "https://images.pexels.com/photos/34387471/pexels-photo-34387471.jpeg", origin: "India" }
];

// Initialize products
function initProducts() {
    if (!localStorage.getItem(STORAGE_PRODUCTS)) {
        localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
    }
}

function getProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_PRODUCTS)) || DEFAULT_PRODUCTS;
}

function saveProducts(products) {
    localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(products));
}

// User functions
function getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_USERS)) || [];
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(STORAGE_CURRENT_USER));
}

function setCurrentUser(user) {
    localStorage.setItem(STORAGE_CURRENT_USER, JSON.stringify(user));
}

function logout() {
    localStorage.removeItem(STORAGE_CURRENT_USER);
    window.location.href = 'index.html';
}

// Cart functions
function getCart() {
    const cart = localStorage.getItem(STORAGE_CART);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(STORAGE_CART, JSON.stringify(cart));
}

function addToCart(product) {
    let cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
    updateCartDisplay();
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartDisplay();
}

function updateQuantity(productId, delta) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        saveCart(cart);
        updateCartDisplay();
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartDisplay() {
    const cartCountElem = document.getElementById('cartCount');
    if (cartCountElem) {
        cartCountElem.innerText = getCartCount();
    }
}

// Admin: upload new product
function uploadProduct(productData) {
    const products = getProducts();
    const newId = Date.now();
    const priceNum = parseInt(productData.price.replace(/[^0-9]/g, '')) || 0;
    const newProduct = {
        id: newId,
        name: productData.name,
        price: productData.price,
        priceNum: priceNum,
        desc: productData.desc || 'Fresh farm product',
        image: productData.image || 'https://images.pexels.com/photos/164504/agriculture-field-soil-crops-164504.jpeg?auto=compress&cs=tinysrgb&w=400',
        origin: productData.origin || 'Local Farm'
    };
    products.push(newProduct);
    saveProducts(products);
}

// Page specific initialization
document.addEventListener('DOMContentLoaded', () => {
    initProducts();
    
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'register.html') {
        initRegisterPage();
    } else if (currentPage === 'login.html') {
        initLoginPage();
    } else if (currentPage === 'products.html') {
        initProductsPage();
    } else if (currentPage === 'admin.html') {
        initAdminPage();
    }
});

function initRegisterPage() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const location = document.getElementById('regLocation').value;
        const mobile = document.getElementById('regMobile').value;
        
        const users = getUsers();
        if (users.find(u => u.email === email)) {
            document.getElementById('regMessage').innerText = 'Email already registered!';
            return;
        }
        
        const newUser = { name, email, password, location, mobile, isAdmin: email === 'admin@eagro.com' };
        users.push(newUser);
        saveUsers(users);
        document.getElementById('regMessage').innerHTML = '<span style="color:green;">Registration successful! <a href="login.html">Login here</a></span>';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    });
}

function initLoginPage() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            setCurrentUser({ email: user.email, name: user.name, isAdmin: user.isAdmin || false });
            window.location.href = 'products.html';
        } else {
            document.getElementById('loginMessage').innerText = 'Invalid credentials';
        }
    });
}

function initProductsPage() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Show admin link if user is admin
    const adminLink = document.getElementById('adminLink');
    if (adminLink && user.isAdmin) {
        adminLink.style.display = 'inline-block';
    }
    
    document.getElementById('userName').innerText = user.name;
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Load products
    loadProductGrid();
    
    // Cart toggle
    const cartToggle = document.getElementById('cartToggle');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.getElementById('closeCartModal');
    
    cartToggle.addEventListener('click', () => {
        updateCartModal();
        cartModal.style.display = 'flex';
    });
    closeCartModal.onclick = () => cartModal.style.display = 'none';
    
    // Product modal
    const productModal = document.getElementById('productModal');
    const closeProductModal = document.getElementById('closeProductModal');
    closeProductModal.onclick = () => productModal.style.display = 'none';
    
    // Order success modal
    const orderModal = document.getElementById('orderSuccessModal');
    const closeOrderModal = document.getElementById('closeOrderModal');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    
    closeOrderModal.onclick = () => orderModal.style.display = 'none';
    if (continueShoppingBtn) {
        continueShoppingBtn.onclick = () => orderModal.style.display = 'none';
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', () => {
        const cart = getCart();
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const total = getCartTotal();
        document.getElementById('slipCustomer').innerText = user.name;
        document.getElementById('slipDate').innerText = new Date().toLocaleString();
        document.getElementById('slipTotal').innerText = total;
        
        // Clear cart
        localStorage.removeItem(STORAGE_CART);
        updateCartDisplay();
        
        // Close cart modal and show order success modal
        cartModal.style.display = 'none';
        orderModal.style.display = 'flex';
        
        // Reload product grid to reflect empty cart
        loadProductGrid();
    });
    
    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) cartModal.style.display = 'none';
        if (e.target === productModal) productModal.style.display = 'none';
        if (e.target === orderModal) orderModal.style.display = 'none';
    });
    
    updateCartDisplay();
}

function loadProductGrid() {
    const products = getProducts();
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-desc">${product.desc.substring(0, 60)}...</div>
            </div>
        `;
        card.addEventListener('click', () => openProductModal(product));
        grid.appendChild(card);
    });
}

function openProductModal(product) {
    const modal = document.getElementById('productModal');
    document.getElementById('modalImg').style.backgroundImage = `url('${product.image}')`;
    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalDesc').innerText = product.desc;
    document.getElementById('modalPrice').innerText = product.price;
    document.getElementById('modalOrigin').querySelector('span').innerText = product.origin || 'Local Farm';
    
    const addBtn = document.getElementById('modalAddToCart');
    addBtn.onclick = () => {
        addToCart(product);
        modal.style.display = 'none';
    };
    
    modal.style.display = 'flex';
}

function updateCartModal() {
    const cartItems = getCart();
    const container = document.getElementById('cartItemsList');
    const totalDisplay = document.getElementById('cartTotalDisplay');
    
    if (!container) return;
    
    if (cartItems.length === 0) {
        container.innerHTML = '<p style="text-align:center;">Your cart is empty.</p>';
        totalDisplay.innerHTML = 'Total: ₹0';
        return;
    }
    
    let html = '';
    cartItems.forEach(item => {
        html += `
            <div class="cart-item">
                <span><strong>${item.name}</strong> (${item.price})</span>
                <div>
                    <button class="remove-item" data-id="${item.id}" data-delta="-1">-</button>
                    <span style="margin:0 10px;">${item.quantity}</span>
                    <button class="remove-item" data-id="${item.id}" data-delta="1">+</button>
                    <button class="remove-item" style="background:#c0392b;" data-id="${item.id}" data-delta="remove">Remove</button>
                </div>
                <span>₹${item.priceNum * item.quantity}</span>
            </div>
        `;
    });
    container.innerHTML = html;
    totalDisplay.innerHTML = `Total: ₹${getCartTotal()}`;
    
    // Add event listeners to buttons
    document.querySelectorAll('[data-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const delta = btn.dataset.delta;
            if (delta === 'remove') {
                removeFromCart(id);
            } else {
                updateQuantity(id, parseInt(delta));
            }
            updateCartModal();
            updateCartDisplay();
        });
    });
}

function initAdminPage() {
    const user = getCurrentUser();
    if (!user || !user.isAdmin) {
        window.location.href = 'login.html';
        return;
    }
    
    document.getElementById('adminName').innerText = user.name;
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('backToProducts').addEventListener('click', () => {
        window.location.href = 'products.html';
    });
    
    // Load all products
    const products = getProducts();
    const grid = document.getElementById('adminProductGrid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-desc">${product.desc.substring(0, 60)}...</div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Upload form
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('pName').value;
        const price = document.getElementById('pPrice').value;
        const image = document.getElementById('pImg').value;
        const desc = document.getElementById('pDesc').value;
        const origin = document.getElementById('pOrigin').value;
        
        if (!name || !price) {
            alert('Product Name and Price are required!');
            return;
        }
        
        uploadProduct({ name, price, image, desc, origin });
        alert('Product uploaded successfully!');
        uploadForm.reset();
        
        // Refresh product list
        const newProduct = getProducts().slice(-1)[0];
        const newCard = document.createElement('div');
        newCard.className = 'product-card';
        newCard.innerHTML = `
            <div class="product-img" style="background-image: url('${newProduct.image}')"></div>
            <div class="product-info">
                <h3>${newProduct.name}</h3>
                <div class="product-price">${newProduct.price}</div>
                <div class="product-desc">${newProduct.desc.substring(0, 60)}...</div>
            </div>
        `;
        grid.appendChild(newCard);
    });
}