import { all, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { countryActions } from './actions'

function* filterRequest(action: AnyAction) {
    console.log('Do something', action)
    yield action
}

export default function* rootSaga() {
    yield all([takeEvery(countryActions.selectRegion.type, filterRequest)])
}
