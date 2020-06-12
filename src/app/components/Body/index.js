import css from './css.styl'

function Body({ value }) {
    const node = document.createElement('div')

    node.classList.add(css.container)

    if (!value) {
        const presskeyNode = document.createElement('span')
        presskeyNode.classList.add(css.presskey)

        presskeyNode.innerText = 'Press any key'

        node.appendChild(presskeyNode)

        return node
    }

    const keyNode = document.createElement('span')
    keyNode.classList.add(css.key)
    keyNode.innerText = value

    node.appendChild(keyNode)

    return node
}

export default Body
