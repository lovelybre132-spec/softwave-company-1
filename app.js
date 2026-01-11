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