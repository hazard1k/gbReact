import logger from 'redux-logger'
import { messagesMiddleware } from './messagesMiddleware'


export default [
    logger,
    messagesMiddleware
];