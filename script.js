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
            singleDiv.classList.add(`0`);
            rowDiv.appendChild(singleDiv);
        }
    }

    const allDivs = document.querySelectorAll(`.singleDiv`);
    allDivs.forEach((singleDiv) => {
        singleDiv.addEventListener("mouseover", () => {
            const classNames = singleDiv.className
            let numOfTouch = Number(classNames.split(` `)[1]);
            
            singleDiv.classList.remove(`${+numOfTouch}`);
            if (numOfTouch === 0) {
                singleDiv.setAttribute(`style`, `background: rgba(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()}, ${0.1 * (++numOfTouch)});`);
                singleDiv.classList.add(`${numOfTouch}`);
            }
            else if (numOfTouch < 10) {
                numOfTouch += 1;
                const currentColor = getComputedStyle(singleDiv).backgroundColor;
                opacity = (0.1 * numOfTouch).toFixed(1);
                newColor = currentColor.slice(0, -4) + opacity + `)`;
                singleDiv.setAttribute(`style`, `background: ${newColor}`);
                singleDiv.classList.add(`${numOfTouch}`);
            }
    })})
}

function generateRandomColor() {
    const randomColorNumber = Math.floor(Math.random() * 256);
    return randomColorNumber
}

// function randomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

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
