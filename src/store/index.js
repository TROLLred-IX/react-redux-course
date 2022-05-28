import { createStore, combineReducers, applyMiddleware} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import countReducer from './countReducer';
import userReducer from './userReducer';
import createSagaMiddleware from '@redux-saga/core';
import { countWatcher } from '../saga/countSaga';
import { rootWatcher } from '../saga';

/*const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
});*/

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    countReducer,
    userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));