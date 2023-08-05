const container = document.querySelector('.container');
const button = document.querySelector('button');
let containerWidth = 16;
let containerHeight = 16;
let grey;

button.addEventListener('click', () => {
    containerWidth = prompt("How many blocks left and right?", 16);
    containerHeight = prompt("How many blocks up and down?", 16);

    if (containerWidth >= 101 || containerHeight > 101) {
        alert("You picked too big a number! Make sure both your numbers are less than 101.");
        containerWidth = 16;
        containerHeight = 16;
    };

    container.style.width = 12*containerWidth+"px";
    container.style.height = 12*containerHeight+"px";
    drawGrid();
    playEAS();
});

function drawGrid() {
    container.replaceChildren(); // clears grid
        for (let i = 0; i < (containerWidth*containerHeight); i++) {
            let block = document.createElement('div');
            block.className = 'block';
           container.appendChild(block);
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