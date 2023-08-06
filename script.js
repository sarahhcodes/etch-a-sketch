const container = document.querySelector('.container');
const button = document.querySelector('button');
let blockSize = 16;
let numberOfBlocks = 30;
let grey;

button.addEventListener('click', () => {
    blockSize = parseInt(prompt("What size would you like your blocks?", 16));

    if (blockSize >= 101) {
        alert("You picked too big a number! Make sure both your numbers are less than 101.");
        blockSize = 16;
    };

    numberOfBlocks = Math.round(540/(blockSize+2));
    drawGrid();
    playEAS();
});

function drawGrid() {
    container.replaceChildren(); // clears grid
    for (let i = 0; i < numberOfBlocks; i++) {
        let containerRow = document.createElement('div');
        for (let j = 0; j < numberOfBlocks; j++) {
            let block = document.createElement('div');
            block.className = 'block';
            block.style.width = blockSize + 'px';
            block.style.height = blockSize + 'px';
            containerRow.appendChild(block);
        };
        container.appendChild(containerRow);
    };
};

// function that adds the hover effect to the blocks
function playEAS() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => block.addEventListener('mouseover', () => {
        grey = Math.random()*200;
        block.style.background = "rgb("+ grey + "," + grey + "," + grey +")";
    }));
};

// ensures that the page loads with Etch-A-Sketch playable
drawGrid();
playEAS();