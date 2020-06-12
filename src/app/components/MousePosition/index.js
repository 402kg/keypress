import css from './css.styl'

function MousePosition({ x, y }) {
    const node = document.createElement('div')
    const content = document.createElement('div')
    const title = document.createElement('span')
    const valueX = document.createElement('span')
    const valueY = document.createElement('span')

    node.classList.add(css.container)
    content.classList.add(css.content)
    title.classList.add(css.title)
    valueX.classList.add(css.value)
    valueY.classList.add(css.value)

    title.innerText = 'Mouse position:'
    valueX.innerText = `X: ${x}`
    valueY.innerText = `Y: ${y}`

    content.appendChild(title)
    content.appendChild(valueX)
    content.appendChild(valueY)

    node.appendChild(content)

    return node
}

export default MousePosition
