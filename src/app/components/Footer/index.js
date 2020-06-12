import KeyProps from '../KeyProps'
import MousePosition from '../MousePosition'

import css from './css.styl'

function Footer({ x, y, json, value }) {
    const node = document.createElement('div')
    const content = document.createElement('div')

    node.classList.add(css.container)
    content.classList.add(css.content)

    const keyProps = KeyProps({ json, value })
    const mousePosition = MousePosition({ x, y })

    content.appendChild(keyProps)
    content.appendChild(mousePosition)

    node.appendChild(content)

    return node
}

export default Footer
