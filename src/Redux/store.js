import { createStore } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { USERTYPES } from './constants/userTypes'

const initState = {
    chat: {
        messages: {
            0: [{ text: "hello chat 0", author: USERTYPES.ROBOT }]
        },
        rooms: ['1']
    },
    profile: {
        nickName: 'User'
    }

};

const store = createStore(reducers, initState, composeWithDevTools());

export { store }