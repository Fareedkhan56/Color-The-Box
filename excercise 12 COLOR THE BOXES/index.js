let boxes = document.querySelector('.container').children

let RandomColor = () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return `rgba(${red} ${green} ${blue})`
}

Array.from(boxes).forEach(element => {
    element.style.color = RandomColor()
    element.style.backgroundColor = RandomColor()
})