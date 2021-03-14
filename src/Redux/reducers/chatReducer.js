import { SEND_MESSAGE } from '../actions/messageAction'
import { ADD_CHAT } from '../actions/chatAction'
const initialState = {};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const prevMessages = state.messages[action.payload.chatId] || [];
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...prevMessages,
                        {
                            text: action.payload.text,
                            author: action.payload.author,
                        }
                    ]
                }
            }
        case ADD_CHAT:
            {
                const newId = Object.keys(state.rooms).length;
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        [newId]: []
                    },
                    rooms: [...state.rooms, action.payload.chatName]

                }
            }
        default:
            return state;
    }
}