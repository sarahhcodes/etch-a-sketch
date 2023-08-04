/* TO DO
- make size of the grid adjustable (i.e. 16x16)
- add style to button
- add gradient effect to hover (CSS variables?)
*/

const container = document.querySelector('.container');
const button = document.querySelector('button');
let numberOfBlocks = 256;

button.addEventListener('click', () => {
    numberOfBlocks = prompt("How many blocks?", 256);
    drawGrid();
    playEAS();
});

function drawGrid() {
    container.replaceChildren(); // clears grid

        for (let i = 0; i < numberOfBlocks; i++) {
            let block = document.createElement('div');
            block.className = 'block';
           container.appendChild(block);
        };
};

// function that adds the hover effect to the blocks
function playEAS() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => block.addEventListener('mouseover', () => {
        block.classList.add('blockHover');
    }));
};

// ensures that the page loads with Etch-A-Sketch playable
drawGrid();
playEAS();