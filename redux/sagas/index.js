import {takeLatest,put,all} from 'redux-saga/effects'
import { } from './user.saga'

export  function* rootSaga() {
    yield all([folk(watchSignup)])
}
