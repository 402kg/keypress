import { SET_KEY_VALUES } from '../actions'

function getOSKeysNames() {
    if (navigator.appVersion.indexOf('Mac') > -1) {
        return {
            alt: 'Option',
            ctrl: 'Control',
            shift: 'Shift',
        }
    }

    return {
        alt: 'Alt',
        ctrl: 'Ctrl',
        shift: 'Shift',
    }
}

function getKey(code) {
    if (code.indexOf('Key') > -1) {
        return code.replace('Key', '')
    }

    if (code.indexOf('Digit') > -1) {
        return code.replace('Digit', '')
    }

    return code
}

function getJSON({
    charCode,
    code,
    keyCode,
    timeStamp,
}) {
    return {
        charCode,
        code,
        key: getKey(code),
        keyCode,
        timeStamp,
    }
}

function getValue({
    altKey,
    ctrlKey,
    shiftKey,

    code,
}) {
    const { alt, ctrl, shift } = getOSKeysNames()
    const key = getKey(code)

    if (altKey) {
        return `${alt} - ${key}`
    }

    if (ctrlKey) {
        return `${ctrl} - ${key}`
    }

    if (shiftKey) {
        return `${shift} - ${key}`
    }

    return key
}

const handleKeyPress = (dispatch) => (event) => {
    event.preventDefault()
    event.stopPropagation()

    const json = getJSON(event)
    const value = getValue(event)

    dispatch({
        type: SET_KEY_VALUES,
        payload: {
            json,
            value,
        },
    })
}

export default handleKeyPress
