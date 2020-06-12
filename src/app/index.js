import Footer from './components/Footer'
import Body from './components/Body'

import {
    SET_KEY_VALUES,
    SET_MOUSE_POSITION,
} from './actions'

import {
    handleKeyPress,
    handleMouseMove,
} from './handlers'

import css from './css.styl'

const initialState = {
    x: 0,
    y: 0,

    value: null,
    json: { },
}

function render(state = { }) {
    const dom = document.createElement('div')
    dom.classList.add(css.container)

    const footer = Footer(state)
    const key = Body(state)

    dom.appendChild(key)
    dom.appendChild(footer)

    return dom
}

function setState(state, action) {
    switch (action.type) {
    case SET_KEY_VALUES: {
        return {
            ...state,

            value: action.payload.value,
            json: action.payload.json,
        }
    }

    case SET_MOUSE_POSITION: {
        return {
            ...state,

            x: action.payload.x,
            y: action.payload.y,
        }
    }

    default:
        return state
    }
}

export default function main() {
    const root = document.querySelector('#root')
    const state = initialState

    root.appendChild(render(state))

    function dispatch(action) {
        Object.assign(state, setState(state, action))

        root.replaceChild(render(state), root.childNodes[0])
    }

    document.addEventListener('keypress', handleKeyPress(dispatch))
    document.addEventListener('mousemove', handleMouseMove(dispatch))
}
