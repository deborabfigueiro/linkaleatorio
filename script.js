const links = [
    "https://developer.mozilla.org",
    "https://github.com",
    "https://css-tricks.com",
    "https://javascript.info"
];

const randomBtn = document.getElementById('random-btn');
const sequentialBtn = document.getElementById('sequential-btn');

let sequentialIndex = 0;
let isProcessing = false;


function openLink(link) {
    if (isProcessing) return;
    
    isProcessing = true;
    window.open(link, '_blank');
    
    setTimeout(() => {
        isProcessing = false;
    }, 500);
}

// Botão 1: Link Aleatório
randomBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    openLink(links[randomIndex]);
});

// Botão 2: Link Sequencial
sequentialBtn.addEventListener('click', () => {
    openLink(links[sequentialIndex]);

    if (isProcessing) { 
        sequentialIndex++;
       
        if (sequentialIndex >= links.length) {
            sequentialIndex = 0;
        }
    }
});