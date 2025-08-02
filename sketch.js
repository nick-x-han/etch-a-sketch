const container = document.querySelector(".container");
const SIZE = 800;
function createGrid(numSquares) {
    container.textContent = "";
    const width = SIZE / numSquares;
    const height = SIZE / numSquares;

    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.style.width = width.toString() + "px";
            div.style.height = height.toString() + "px";
            container.appendChild(div);
        }
    }
}

createGrid(16);


const squares = document.querySelectorAll(".square");
container.addEventListener("mouseover", e => {
    const square = e.target;
    if (square.classList.contains('square')) {
        // square.style.backgroundColor = "red";
        const rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        console.log(square.style.opacity);
        square.style.backgroundColor = rndCol;
        // square.style.opacity += 1;
    }
})

const resize = document.querySelector(".resize");
resize.addEventListener("click", (e) => {
    let num = +prompt("Enter # of squares per side. Max 100", 100);
    let attempts = 0;
    while (!(Number.isInteger(num) && num > 0 && num <= 100 && num != undefined)) {
        num = +prompt("Enter # of squares per side. Max 100", 100);
        attempts++;
        if (attempts > 5)
            break;
    }
    createGrid(num);
})
//note that mouseover instead of mouseenter and mouseout => mouseleave
// container.addEventListener("mouseout", e => {
//     const square = e.target;
//     square.style.backgroundColor = "peachpuff";
// })
// squares.forEach(square => square.addEventListener("mouseover", ))