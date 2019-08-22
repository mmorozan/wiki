import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import api from './middlewares/api';
import thunk from 'redux-thunk';

const composeEnhancer = composeWithDevTools({});
const enhancer = composeEnhancer(
    applyMiddleware(thunk, api)
)

const store = createStore(reducer, enhancer)

window.store = store

export default store