import css from './css.styl'

function KeyProps({ json, value }) {
    const node = document.createElement('div')
    node.classList.add(css.container)

    if (value) {
        const content = document.createElement('div')
        const result = document.createElement('pre')
        content.classList.add(css.content)
        result.innerText = JSON.stringify(json, null, 4)

        content.appendChild(result)
        node.appendChild(content)
    }

    return node
}

export default KeyProps
