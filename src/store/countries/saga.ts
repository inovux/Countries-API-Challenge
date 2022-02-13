import {
    all,
    debounce,
    takeEvery,
    select,
    SimpleEffect,
} from 'redux-saga/effects'
import { countryActions } from './actions'
import { countrySelectors } from './selectors'
import { countriesRequests } from '../../api/countries'

// TODO: Fix types
function* filterRequest(): Generator<
    Promise<any> | SimpleEffect<string>,
    string,
    any
> {
    const state: ReturnType<typeof countrySelectors.filter> = yield select(
        countrySelectors.filter
    )

    const params = {
        ...state,
    }

    const data = yield countriesRequests.getCountries(params)

    console.log(data)

    return 'Call another action with given data'
}

export default function* rootSaga() {
    yield all([
        takeEvery(countryActions.selectRegion.type, filterRequest),
        debounce(500, countryActions.setSearch.type, filterRequest),
    ])
}
