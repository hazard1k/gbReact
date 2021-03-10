import { CHANGE_NICK } from '../actions/profileAction'
const initialState = {};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NICK:
            return {
                nickName: action.payload.nickName
            }

        default:
            return state;
    }
}