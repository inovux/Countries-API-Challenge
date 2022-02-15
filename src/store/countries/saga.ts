import { all, debounce, put, takeEvery, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { Success } from 'typescript-fsa'
import { countryActions } from './actions'
import { countrySelectors } from './selectors'
import { countriesRequests } from '../../api/countries'
import { ICountry, ICountryFilter } from '../../types'

function* filterRequest() {
    const state: ReturnType<typeof countrySelectors.filter> = yield select(
        countrySelectors.filter
    )

    const params = {
        ...state,
    }

    yield put(countryActions.get.started(params))
}

function* getCountries(action: AnyAction) {
    try {
        const data: Success<ICountryFilter, { data: ICountry[] }> =
            yield countriesRequests.getCountries(action.payload)

        yield put(countryActions.get.done(data))
    } catch (e: any) {
        yield put(countryActions.get.failed(e))
    }

    return action.payload
}

export default function* rootSaga() {
    yield all([
        takeEvery(countryActions.get.started, getCountries),
        takeEvery(countryActions.selectRegion.type, filterRequest),
        debounce(500, countryActions.setSearch.type, filterRequest),
    ])
}
