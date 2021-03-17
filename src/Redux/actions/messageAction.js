export const SEND_MESSAGE = "@@message/SEND_MESSAGE";
export const DELETE_MESSAGE = "@@message/DELETE_MESSAGE";


export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    }
});

export const deleteMessage = (chatId, messageId) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        messageId,
    }
});