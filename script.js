// Array com os 4 links demonstrativos
const links = [
    "https://developer.mozilla.org",
    "https://github.com",
    "https://css-tricks.com",
    "https://javascript.info"
];

const button = document.getElementById('random-btn');

button.addEventListener('click', () => {
    // Gera um índice aleatório entre 0 e o tamanho do array (4)
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];
    
    // Redireciona o usuário (abre em uma nova aba)
    window.open(selectedLink, '_blank');
});