import { countWatcher } from './countSaga';
import { all } from 'redux-saga/effects';
import { userWatcher } from './userSaga';

export function* rootWatcher() {
    yield all([countWatcher(), userWatcher()])
}