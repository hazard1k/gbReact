export const ADD_CHAT = "@@chat/ADD_CHAT";
export const DELETE_CHAT = "@@chat/DELETE_CHAT";


export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatName
    }
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: {
        chatId
    }
});