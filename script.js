// script.js

// ==================== 20 FARMING PRODUCTS ====================
const productsData = [
    { id: 1, name: "Potato", price: "₹20/kg", shortDesc: "Staple tuber", fullDesc: "A staple tuber used in a wide variety of daily dishes.", image: "https://images.pexels.com/photos/30624993/pexels-photo-30624993.jpeg", origin: "India" },
    { id: 2, name: "Tomato", price: "₹30/kg", shortDesc: "Juicy vegetable", fullDesc: "Highly demanded for sauces, salads, and curries.", image: "https://images.pexels.com/photos/34993617/pexels-photo-34993617.jpeg", origin: "India" },
    { id: 3, name: "Onion", price: "₹25/kg", shortDesc: "Essential cooking base", fullDesc: "A fundamental ingredient in almost all savory cooking.", image: "https://images.pexels.com/photos/13982568/pexels-photo-13982568.jpeg", origin: "India" },
    { id: 4, name: "Spinach (Palak)", price: "₹20/bunch", shortDesc: "Iron-rich leafy green", fullDesc: "A leafy green packed with iron, commonly used for curries and soups.", image: "https://images.pexels.com/photos/19957370/pexels-photo-19957370.jpeg", origin: "India" },
    { id: 5, name: "Okra (Bhindi)", price: "₹40/kg", shortDesc: "Fiber-rich vegetable", fullDesc: "A popular green vegetable rich in soluble fiber.", image: "https://images.pexels.com/photos/33211276/pexels-photo-33211276.jpeg", origin: "India" },
    { id: 6, name: "Cauliflower", price: "₹35/kg", shortDesc: "Versatile veggie", fullDesc: "A versatile vegetable often used in curries and stir-fries.", image: "https://images.pexels.com/photos/28768714/pexels-photo-28768714.jpeg", origin: "India" },
    { id: 7, name: "Cabbage", price: "₹22/kg", shortDesc: "Leafy vegetable", fullDesc: "A leafy, nutrient-dense cruciferous vegetable.", image: "https://images.pexels.com/photos/36771049/pexels-photo-36771049.jpeg", origin: "India" },
    { id: 8, name: "Carrot ", price: "₹30/kg", shortDesc: "Crunchy & sweet", fullDesc: "Widely consumed raw in salads or cooked in various dishes.", image: "https://images.pexels.com/photos/34936603/pexels-photo-34936603.jpeg", origin: "India" },
    { id: 9, name: "Cucumber", price: "₹25/kg", shortDesc: "Hydrating vegetable", fullDesc: "Primarily eaten raw for hydration and in salads.", image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg", origin: "India" },
    { id: 10, name: "Brinjal (Baingan)", price: "₹28/kg", shortDesc: "Purple vegetable", fullDesc: "A common, versatile vegetable for curries and roasting.", image: "https://images.pexels.com/photos/34346365/pexels-photo-34346365.jpeg", origin: "India" },
    { id: 11, name: "Green Chili", price: "₹40/kg", shortDesc: "Spicy ingredient", fullDesc: "A staple for adding heat to Indian cooking.", image: "https://images.pexels.com/photos/10899475/pexels-photo-10899475.jpeg", origin: "India" },
    { id: 12, name: "Garlic", price: "₹120/kg", shortDesc: "Strong aroma", fullDesc: "A key aromatic used for flavoring almost all dishes.", image: "https://images.pexels.com/photos/25315388/pexels-photo-25315388.jpeg", origin: "India" },
    { id: 13, name: "Ginger", price: "₹90/kg", shortDesc: "Zesty root", fullDesc: "Used extensively daily as a seasoning and aromatic.", image: "https://images.pexels.com/photos/11369666/pexels-photo-11369666.jpeg", origin: "India" },
    { id: 14, name: "Green Peas", price: "₹50/kg", shortDesc: "Sweet legumes", fullDesc: "A popular starchy legume used in curries and rice dishes.", image: "https://images.pexels.com/photos/32188885/pexels-photo-32188885.jpeg", origin: "India" },
    { id: 15, name: "Bottle Gourd (Lauki) ", price: "₹30/kg", shortDesc: "Healthy vegetable", fullDesc: "A nutritious, hydrating vegetable popular in weight management diets.", image: "https://images.pexels.com/photos/11833021/pexels-photo-11833021.jpeg", origin: "India" },
    { id: 16, name: "Bell Pepper (Capsicum)", price: "₹60/kg", shortDesc: "Colorful vegetable", fullDesc: "Frequently used for stir-fries, pizza topping, and salads.", image: "https://images.pexels.com/photos/10899481/pexels-photo-10899481.jpeg", origin: "India" },
    { id: 17, name: "Fenugreek Leaves (Methi)", price: "₹20/bunch", shortDesc: "Bitter leafy green", fullDesc: "Commonly used for its flavorful, bitter taste in breads and dals.", image: "https://images.pexels.com/photos/9344827/pexels-photo-9344827.jpeg", origin: "India" },
    { id: 18, name: "Ridge Gourd (Tori)", price: "₹35/kg", shortDesc: "Healthy vegetable", fullDesc: "A healthy vegetable frequently used in daily dals and curries.", image: "https://images.pexels.com/photos/35072410/pexels-photo-35072410.jpeg", origin: "India" },
    { id: 19, name: "Radish (Mooli)", price: "₹18/kg", shortDesc: "Crunchy root", fullDesc: "Frequently used raw in salads or for making parathas.", image: "https://images.pexels.com/photos/7214603/pexels-photo-7214603.jpeg", origin: "India" },
    { id: 20, name: "French Beans", price: "₹45/kg", shortDesc: "Green beans", fullDesc: "A common, high-fiber green bean used in stir-fries and salads.", image: "https://images.pexels.com/photos/34387471/pexels-photo-34387471.jpeg", origin: "India" }
];

// ==================== AUTHENTICATION ====================
let currentUser = null;

function loadUsers() {
    const users = localStorage.getItem('eagro_users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('eagro_users', JSON.stringify(users));
}

// Register handler (on register.html)
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value.trim();
        const location = document.getElementById('regLocation').value.trim();
        const mobile = document.getElementById('regMobile').value.trim();
        const msgDiv = document.getElementById('regMessage');

        if (!name || !email || !password || !location || !mobile) {
            msgDiv.innerHTML = "❌ All fields required!";
            return;
        }
        let users = loadUsers();
        if (users.find(u => u.email === email)) {
            msgDiv.innerHTML = "⚠️ Email already exists!";
            return;
        }
        users.push({ name, email, password, location, mobile });
        saveUsers(users);
        msgDiv.innerHTML = "✅ Registration successful! <a href='login.html'>Login now</a>";
        msgDiv.style.color = "green";
        setTimeout(() => { window.location.href = "login.html"; }, 1500);
    });
}

// Login handler (on login.html)
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const msgDiv = document.getElementById('loginMessage');
        const users = loadUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
            msgDiv.innerHTML = "✅ Login successful! Redirecting...";
            msgDiv.style.color = "green";
            setTimeout(() => { window.location.href = "products.html"; }, 1000);
        } else {
            msgDiv.innerHTML = "❌ Invalid email or password!";
        }
    });
}

// Products page logic
if (document.getElementById('productGrid')) {
    // Load current user
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        document.getElementById('userName').innerText = currentUser.name;
    } else {
        window.location.href = "login.html";
    }

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = "index.html";
    });

    // Render Products
    function renderProducts() {
        const grid = document.getElementById('productGrid');
        grid.innerHTML = '';
        productsData.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img" style="background-image: url('${product.image}');"></div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <div class="product-desc">${product.shortDesc}</div>
                    <small><i class="fas fa-map-marker-alt"></i> ${product.origin}</small>
                </div>
            `;
            card.addEventListener('click', () => showProductDetails(product));
            grid.appendChild(card);
        });
    }

    // Show Modal with Product Info + Farming Process Info
    function showProductDetails(product) {
        const modal = document.getElementById('productModal');
        document.getElementById('modalTitle').innerText = product.name;
        document.getElementById('modalImg').style.backgroundImage = `url('${product.image}')`;
        // Add 10-20 lines of planting to harvesting process inside modal
        const farmingGuide = `
            <strong>🌱 Planting to Harvesting Guide for ${product.name}:</strong><br>
            1. Land preparation: Ploughing & tilling the soil.<br>
            2. Seed selection: Choose high-quality seeds.<br>
            3. Sowing: Plant at correct depth & spacing.<br>
            4. Irrigation: Regular watering schedule.<br>
            5. Fertilizers: Use organic manure & NPK.<br>
            6. Weeding: Remove unwanted plants weekly.<br>
            7. Pest control: Neem oil spray if needed.<br>
            8. Crop monitoring: Check growth every week.<br>
            9. Flowering stage: Add micronutrients.<br>
            10. Fruit/Vegetable formation: Support plants.<br>
            11. Maturity signs: Color change, size.<br>
            12. Harvesting: Use sharp tools, early morning.<br>
            13. Post-harvest: Cleaning & sorting.<br>
            14. Storage: Keep in cool dry place.<br>
            15. Transport: Pack carefully to market.<br>
            16. Selling: Get best market price.<br>
            💡 Tip: Always test soil before planting!
        `;
        document.getElementById('modalDesc').innerHTML = `<p>${product.fullDesc}</p><br><div style="background:#f0f7e8; padding:12px; border-radius:12px; font-size:13px; text-align:left;">${farmingGuide}</div>`;
        document.getElementById('modalPrice').innerHTML = product.price;
        document.querySelector('#modalOrigin span').innerText = product.origin;
        modal.style.display = 'flex';
    }

    // Close modal
    function closeModal() {
        document.getElementById('productModal').style.display = 'none';
    }
    document.querySelector('.close-modal')?.addEventListener('click', closeModal);
    document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('productModal');
        if (e.target === modal) closeModal();
    });

    renderProducts();
}