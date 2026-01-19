const SUPABASE_URL = 'https://zwtdeaqbeytnllldqbbl.supabase.co/rest/v1/LEAD';
const SUPABASE_KEY =   'sb_publishable_hfN4Ncv5oQT7HS9IgwcA9g_LPa4pCw_';
async function saveData() {
    event.preventDefault();
    // Function to save data
    let contactName = document.getElementById('contactName').value;
    let contactEmail = document.getElementById('ContactEmail').value;
    let contactMessage = document.getElementById('ContactMessage').value;
let user={
    name:contactName,
    email:contactEmail,
    message:contactMessage
};
let response = await fetch(SUPABASE_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
    },
    body: JSON.stringify(user)
});
console.log(user);
console.log(response);
}
async function loadProducts() {
    let response = await fetch('https://zwtdeaqbeytnllldqbbl.supabase.co/rest/v1/product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dGRlYXFiZXl0bmxsbGRxYmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NjYxMzAsImV4cCI6MjA4MTE0MjEzMH0.hoNlMu_eUfizpyiDcxRulr6fZhHV4yIFWmYC3K2cyrE',
        }
    });
    let products = await response.json();
    let productListDiv = document.getElementById('productList');
    products.forEach(product => {
        let productCard = document.createElement('div');
        productCard.className = 'col-md-6 col-lg-3';
        productCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${product.image_url}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Price: $${product.price}</strong></p>
                </div>
            </div>
        `;
        productListDiv.appendChild(productCard);
    });
}
window.onload = function() {
    loadProducts();
};