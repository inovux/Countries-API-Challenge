import { all, debounce, takeEvery, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { countryActions } from './actions'
import { countrySelectors } from './selectors'

function* filterRequest(action: AnyAction) {
    const state: ReturnType<typeof countrySelectors.filter> = yield select(
        countrySelectors.filter
    )
    console.log(state)
    yield action
}

export default function* rootSaga() {
    yield all([
        takeEvery(countryActions.selectRegion.type, filterRequest),
        debounce(500, countryActions.setSearch.type, filterRequest),
    ])
}
