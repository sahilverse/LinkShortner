const contentContatiner = document.querySelector('.content-container');
window.addEventListener('load', () => {
    contentContatiner.style.left = "0px";
});

const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', generate);
// Takes long URL 
const shortUrl = document.getElementById('shortenedUrl')
async function generate() {
    try {
        let longUrl = document.getElementById('url').value;
        let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
        let data = await response.json();
        shortUrl.value = data.result.full_short_link
    }
    catch (err) {
        shortUrl.value = `Server Error! Please try again later.`
    }
};


const copyBtn = document.getElementById('copy');

// Copies generated short URL
copyBtn.onclick = () => {
    // shortUrl.select()
    navigator.clipboard.writeText(shortUrl.value);
    let copied = document.querySelector('.copied');
    copied.style.display = "block"
    setTimeout(() => {
        copied.style.display = "none"
    }, 2000);
};
