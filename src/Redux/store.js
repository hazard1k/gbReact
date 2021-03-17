import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import middlewares from './middlewares'

const initState = {
    chat: {
        messages: {},
        rooms: []
    },
    profile: {
        nickName: 'User'
    }

};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['chat', 'profile'],
    stateReconciler: autoMergeLevel2,
}

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, reducers(history))

const store = createStore(
    persistedReducer,
    initState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middlewares))
);

export const persistor = persistStore(store)

export { store }