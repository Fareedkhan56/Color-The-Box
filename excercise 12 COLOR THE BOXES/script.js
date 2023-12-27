let boxes = document.querySelector('.container').children

function RandomColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return `rgb(${red} ${green} ${blue}`
}

Array.from(boxes).forEach(element => {
    element.style.backgroundColor = `${RandomColor()}`
    element.style.color = `${RandomColor()}`
});

