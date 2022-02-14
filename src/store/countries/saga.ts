import { all, debounce, takeEvery, select } from 'redux-saga/effects'
import { countryActions } from './actions'
import { countrySelectors } from './selectors'
import { countriesRequests } from '../../api/countries'
import { ICountry } from '../../types'

function* filterRequest() {
    const state: ReturnType<typeof countrySelectors.filter> = yield select(
        countrySelectors.filter
    )

    const params = {
        ...state,
    }

    const data: ICountry[] = yield countriesRequests.getCountries(params)

    console.log(data)
}

export default function* rootSaga() {
    yield all([
        takeEvery(countryActions.selectRegion.type, filterRequest),
        debounce(500, countryActions.setSearch.type, filterRequest),
    ])
}
