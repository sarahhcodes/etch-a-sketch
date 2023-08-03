const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let block = document.createElement('div');
    block.className = 'block';
    container.appendChild(block);
}