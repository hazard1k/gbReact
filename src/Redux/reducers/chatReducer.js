import { SEND_MESSAGE, DELETE_MESSAGE } from '../actions/messageAction'
import { ADD_CHAT, DELETE_CHAT } from '../actions/chatAction'
const initialState = {};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const prevMessages = state.messages[action.payload.chatId] || [];
            const newId = Date.now();
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...prevMessages,
                        {
                            id: newId,
                            text: action.payload.text,
                            author: action.payload.author,
                        }
                    ]
                }
            }
        case DELETE_MESSAGE:
            const newMessages = state.messages[action.payload.chatId].filter((message) => message.id !== action.payload.messageId);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...newMessages
                    ]
                }
            }
        case ADD_CHAT:
            {
                const newId = Date.now();
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        [newId]: []
                    },
                    rooms: [...state.rooms, { id: newId, name: action.payload.chatName }]

                }
            }
        case DELETE_CHAT:
            {
                const newChats = state.rooms.filter((room) => room.id !== action.payload.chatId)
                delete state.messages[action.payload.chatId]
                return {
                    ...state,
                    messages: {...state.messages },
                    rooms: [...newChats]

                }
            }
        default:
            return state;
    }
}