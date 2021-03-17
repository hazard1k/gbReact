import { SEND_MESSAGE, sendMessage } from '../actions/messageAction'
import { USERTYPES } from '../constants/userTypes'

export const messagesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            {
                if (action.payload.author === USERTYPES.USER) {
                    setTimeout(() => {
                        store.dispatch(sendMessage('From the robot', USERTYPES.ROBOT, action.payload.chatId))
                    }, 1000)
                }
            }
    }

    return next(action);
}