const container = document.querySelector('.container');
console.log(container);

for (let i = 0; i < 9; i++) {
    let block = document.createElement('div');
    block.className = 'block';
    console.log(block);
    container.appendChild(block);
}