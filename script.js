function createGrid(para) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < para; i++) {
        const rowDiv = document.createElement(`div`);
        rowDiv.classList.add(`rowDiv`)
        container.appendChild(rowDiv);
        for (let j = 0; j < para; j++) {
            const singleDiv = document.createElement(`Div`);
            singleDiv.classList.add(`singleDiv`);
            rowDiv.appendChild(singleDiv);
        }
    }

    const allDivs = document.querySelectorAll(`.singleDiv`);
    allDivs.forEach((singleDiv) => {
        singleDiv.addEventListener("mouseover", () => {
            singleDiv.setAttribute(`style`, `background: black;`);
    })})
}

const container = document.querySelector(`.container`);

let numOfRows = 16;
createGrid(numOfRows);

const button = document.querySelector(`button`);
button.addEventListener(`click`, () => {
    numOfRows = prompt("Enter the number of squares per side for new grid (less than 100): " );
    while (numOfRows > 100) {
        numOfRows = prompt("Number has to be less than 100. Please re-enter: ");
    }
    createGrid(numOfRows);
})
