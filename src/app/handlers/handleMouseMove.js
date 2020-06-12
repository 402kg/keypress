import { SET_MOUSE_POSITION } from '../actions'

const handleMouseMove = (dispatch) => ({ pageX, pageY }) => {
    dispatch({
        type: SET_MOUSE_POSITION,
        payload: {
            x: pageX,
            y: pageY,
        },
    })
}

export default handleMouseMove
