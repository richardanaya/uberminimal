import {DO_SOMETHING} from "./actions"

export default function(state = {
    message:""
}, action) {
    switch (action.type) {
        case DO_SOMETHING:
            return {
                ...state,
                message: "Something happened!"
            }
        default:
            return state
    }
}