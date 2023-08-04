const container = document.querySelector('.container');
const button = document.querySelector('button');

for (let i = 0; i < 256; i++) {
    let block = document.createElement('div');
    block.className = 'block';
    container.appendChild(block);
}

const blocks = document.querySelectorAll('.block');

blocks.forEach(block => block.addEventListener('mouseover', () => {
    block.classList.add('blockHover');
}));